/**
 * 日语语言包
 * @description Japanese translations
 */
export default {
  // 共通
  common: {
    loading: '読み込み中...',
    confirm: '確認',
    cancel: 'キャンセル',
    submit: '送信',
    save: '保存',
    delete: '削除',
    edit: '編集',
    search: '検索',
    more: 'もっと見る',
    viewMore: 'もっと見る',
    back: '戻る',
    close: '閉じる',
    success: '成功',
    error: 'エラー',
    warning: '警告',
    info: '情報',
  },

  // ナビゲーション
  nav: {
    home: 'ホーム',
    trading: '取引',
    nft: 'NFT',
    quickBuyCoins: 'クイック購入',
    tradingCenter: '取引センター',
    copyTrading: 'コピートレード',
    wealthManagement: '資産管理',
    discover: '発見',
    eventHall: 'イベントホール',
    options: 'オプション',
    spot: '現物',
    perpetual: '永続契約',
    aiComputing: 'AI計算',
    marketTrends: '市場動向',
    moreNews: 'ニュース',
    charity: 'チャリティー',
    shareWithFriends: '友達を招待',
    login: 'ログイン',
    register: '登録',
    loginRegister: 'ログイン/登録',
  },

  // ホームページ
  home: {
    // ヒーローセクション
    hero: {
      title: '',
      titleHighlight: '3600万',
      titleSuffix: '人以上のユーザー登録',
      subtitle: '取引所',
      description: 'シンプルで安全。人気の投資を検索して、すぐに利益を得る',
      stats: {
        tradingVolume: '24時間取引量',
        cryptoTypes: '暗号通貨の種類',
        registeredUsers: '登録ユーザー数',
      },
    },

    // 取引所紹介
    exchange: {
      title: 'Nbitmxへようこそ あなたのデジタル資産取引プラットフォーム',
      subtitle: 'すべての人のための暗号通貨取引所',
      stats: {
        clients: 'クライアント',
        countries: '対応国',
        quarterlyVolume: '四半期取引量',
      },
    },

    // AI量的戦略
    aiStrategy: {
      title: 'AI 量的戦略',
      maxYield: '最大利回り',
      participants: '参加者数',
      learnMore: 'AI量的投資について',
    },

    // Web3取引
    web3: {
      title: 'Web3の旅はここから始まります！',
      tabs: {
        web3: 'Web3',
        usStocks: '米国株',
        options: 'オプション',
        spot: '現物',
        perpetual: '永続契約',
        heavyMetals: '貴金属',
      },
    },

    // トレンド分析
    trends: {
      title: 'トレンド分析',
    },

    // 投資ポートフォリオ
    portfolio: {
      title: '投資ポートフォリオ',
      description: 'シンプルで安全。人気の投資を検索して、即座に収益を得る',
      apr: '年利',
      runningTime: '運用期間',
      days: '日',
      goInvest: '投資する',
    },

    // ニュース
    news: {
      title: '最新ニュース',
      viewMore: 'もっと見る',
      comments: 'コメント',
      views: '閲覧数',
    },

    // NFTセクション
    nft: {
      title: '限定NFTコレクションを発見',
      goToLobby: 'NFTロビーへ',
    },

    // チャリティーセクション
    charity: {
      title: 'チャリティーへのコミットメント',
      description: 'ブロックチェーンで世界をより良い場所に！',
      subDescription: 'このプラットフォームは、デジタル資産の発行、流通、アプリケーション、価値発見、ブロックチェーン基盤を中心に完全な業界エコシステムを構築しています。私たちのビジョンは、ブロックチェーン世界のインフラとなり、チャリティーに貢献することです',
      tags: {
        security: 'セキュリティ',
        transparency: '透明性',
        realTimeTraceability: 'リアルタイム追跡',
        efficiencyAndSpeed: '効率とスピード',
        automation: '自動化',
      },
      stats: {
        forCharity: 'チャリティー寄付',
        turnover24h: '24時間売上',
        tokens: 'トークン',
        marketPlace: 'マーケットプレイス',
      },
      goToCenter: 'チャリティーセンターへ',
    },

    // パートナー
    partners: {
      title: 'あなたの信頼できるパートナー',
      description: '安全第一。お客様の資産と情報セキュリティを守るため、継続的に改善を行います。',
      features: {
        reserveDescription: {
          title: '準備金説明',
          description: 'プラットフォームは少なくとも1:1の準備率ですべてのユーザー資産を保有することを約束します。',
        },
        customerFirst: {
          title: '顧客第一主義',
          description: 'グローバル市場向け、多言語サポート。24時間年中無休のオンラインカスタマーサービス、プロフェッショナルサポート。',
        },
        userProtection: {
          title: 'ユーザー保護基金',
          description: '3億ドル相当のユーザー保護基金があり、潜在的なセキュリティリスクに対する追加の保護を提供します。',
        },
      },
    },

    // FAQ
    faq: {
      title: 'よくある質問',
      items: {
        legalNotice: {
          question: '法的通知',
          answer: 'このウェブサイトの目的は、関連する法律や規制に違反することなく、世界中のできるだけ多くのデジタル資産愛好家やユーザーに、専門的で安全かつ信頼性の高いデジタル資産取引および資産管理サービスを提供することです。',
        },
        realNameAuth: {
          question: 'なぜ本人確認が必要ですか？',
          answer: '本人確認は、アカウントのセキュリティを保護し、規制要件を遵守するための重要な措置です。本人確認を完了すると、より高い出金限度額と完全な取引機能をご利用いただけます。',
        },
        forgotPassword: {
          question: 'パスワードを忘れた場合は？',
          answer: '登録したメールアドレスまたは電話番号でパスワードをリセットできます。ログインページで「パスワードを忘れた」をクリックし、指示に従って本人確認を行い、新しいパスワードを設定してください。',
        },
        aboutRecharge: {
          question: '入金について',
          answer: '複数の暗号通貨入金方法をサポートしています。入金したい通貨を選択し、入金アドレスをコピーしてウォレットから送金してください。正しいネットワークタイプを選択してください。',
        },
        accountSecurity: {
          question: 'アカウントセキュリティについて',
          answer: '二要素認証（2FA）を有効にし、資金パスワードを設定し、ログインパスワードを定期的に変更することをお勧めします。パスワードを誰にも共有せず、フィッシングサイトにご注意ください。',
        },
        frozenAssets: {
          question: '凍結資産とは？',
          answer: '凍結資産とは、未決注文や資産運用ロックなどの理由で一時的に利用できない資産を指します。取引完了またはロック期間終了後、資産は自動的に解凍されます。',
        },
      },
    },
  },

  // フッター
  footer: {
    copyright: 'Copyright 2021 © プロフェッショナル仮想通貨サービス会社',
    slogan: '卓越性へのコミットメント、サービス第一',
    consulting: 'コンサルティングサービス',
    tradingMarket: '取引市場',
    marketTicker: '市況',
    options: 'オプション',
    spot: '現物',
    perpetual: '永続',
    assetManagement: '資産管理',
    myAssets: '私の資産',
    deposit: '入金',
    withdraw: '出金',
    transfer: '振替',
    orderCenter: '注文センター',
    products: '製品',
    inviteRewards: '招待報酬',
    support: 'サポート',
    onlineCustomerService: 'オンラインカスタマーサービス',
    aboutUs: '会社概要',
    policy: 'ポリシー',
    termsOfService: '利用規約',
    privacyPolicy: 'プライバシーポリシー',
    amlAgreement: 'マネーロンダリング防止協定',
    disclaimer: 'いつでもどこでも、複数のプラットフォームで取引。様々なデバイスと完全互換で、すべての取引シナリオに対応。',
  },

  // 言語選択
  language: {
    zh: '中文简体',
    en: 'English',
    ja: '日本語',
  },
}
