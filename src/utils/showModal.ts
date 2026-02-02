
import { createApp, h, type Component, type App } from 'vue';
import { Popup } from 'vant';

// Extend the window object to store the app instance if needed, or just keep it local
// For simpler usage, we can just create a mounting point

export interface ModalOptions {
  componentProps?: Record<string, any>;
  modalProps?: Record<string, any>;
}

export function showModal(
  component: Component,
  options: ModalOptions = {}
): Promise<any> {
  return new Promise((resolve, reject) => {
    // Create a container element
    const container = document.createElement('div');
    document.body.appendChild(container);

    let app: App | null = null;
    let isVisible = true;

    // Wrapper component to manage Popup state
    const Wrapper = {
      setup() {
        return () => h(Popup, {
          show: isVisible,
          position: 'center',
          round: true,
          closeable: false, // We'll implement our own close button or rely on the component
          style: {
            backgroundColor: 'transparent',
            padding: 0,
            overflow: 'visible',
            ...options.modalProps?.style
          },
          'onUpdate:show': (val: boolean) => {
            if (!val) {
              handleClose('close');
            }
          },
          ...options.modalProps
        }, {
          default: () => h(component, {
            ...options.componentProps,
            onConfirm: (data: any) => handleClose('confirm', data),
            onClose: () => handleClose('close')
          })
        });
      }
    };

    app = createApp(Wrapper);

    // Mount the app
    app.mount(container);

    function handleClose(type: 'confirm' | 'close', data?: any) {
      isVisible = false;

      // Unmount and cleanup after transition (simulated timeout if needed, but Vant might handle it)
      // Since we control usage, we can just unmount after a short delay or immediately if hidden
      // But properly, we should wait for animation. Vant Popup doesn't expose ease way here without v-model.
      // So we just resolve/reject and let the caller handle logic, while we clean up DOM.

      if (app) {
        app.unmount();
        app = null;
      }
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }

      if (type === 'confirm') {
        resolve(data);
      } else {
        reject(new Error('Cancelled'));
      }
    }
  });
}
