import { DayPlan, TodoItem, TipCategory } from '../types';

export const INITIAL_TODOS: TodoItem[] = [
  {
    id: 'vjw',
    label: '填寫 Visit Japan Web (VJW) 入境審查與海關申報 QR Code',
    checked: false,
    comment: '',
    mapUrl: 'https://www.vjw.digital.go.jp/',
    mapName: 'VJW 官方網站',
  },
  {
    id: 'skyliner',
    label: '確認 Skyliner 車票 (已在 Trip.com 訂好票，出示憑證兌換)',
    checked: true,
    comment: 'Trip.com 訂好票',
    mapUrl: 'https://maps.app.goo.gl/kX72k1W2yZ7W2tqT9',
    mapName: '成田機場 Skyliner 乘車處',
  },
  {
    id: 'suica',
    label: '準備交通卡：iPhone 加入 Suica / PASMO 西瓜卡並加值',
    checked: true,
    comment: '手機錢包可直接加卡 (已確認加妥)',
  },
  {
    id: 'airbnb',
    label: '確認 Airbnb 入住指引、大門密碼鎖與房東聯絡方式',
    checked: true,
    comment: '預計 20:00 抵達 (已確認妥當)',
  },
  {
    id: 'sanrio_ticket',
    label: '確認 三麗鷗彩虹樂園 (Sanrio Puroland) 門票憑證 (已買好票)',
    checked: true,
    comment: '門票已買好，預計 9/20 (日) 前往',
    mapUrl: 'https://maps.app.goo.gl/z9d3W3XnQy4E6m7z8',
    mapName: '三麗鷗彩虹樂園',
  },
  {
    id: 'araiya',
    label: '預約 燒肉內臟 Araiya 澀谷 (尚未預訂)',
    checked: false,
    comment: '極難訂位，盡早至 Tabelog 預約',
    mapUrl: 'https://tabelog.com/tw/tokyo/A1303/A130301/13237382/',
    mapName: 'Araiya Tabelog 頁面',
  },
  {
    id: 'chiikawa_922',
    label: '確認 9/22 (二) 池袋吉依卡哇門票 (已預約 15:00 入場)',
    checked: true,
    comment: '門票時間 15:00',
    mapUrl: 'https://maps.app.goo.gl/1aG5TRwa9nWRuVdz9',
    mapName: 'Chiikawa Park 池袋',
  },
  {
    id: 'chiikawa_925',
    label: '確認 9/25 (五) 吉依卡哇門票 (已預約 12:00 入場)',
    checked: true,
    comment: '門票時間 12:00',
    mapUrl: 'https://maps.app.goo.gl/1aG5TRwa9nWRuVdz9',
    mapName: 'Chiikawa 吉依卡哇',
  },
  {
    id: 'tsukitei',
    label: '預約 月亭 池袋店 (高級和牛壽喜燒) (尚未預訂)',
    checked: false,
    comment: '池袋西口壽喜燒名店',
    mapUrl: 'https://maps.app.goo.gl/3EDfwxPp6596Hs2f6',
    mapName: '月亭 池袋店',
  },
  {
    id: 'buffet',
    label: '預約 9/26 (六) 景觀 Buffet (淺草豪景武藏 或 新大谷 THE SKY)',
    checked: false,
    comment: '秋葉原當日高空美食饗宴',
  },
  {
    id: 'airport_shuttle_927',
    label: '確認 9/27 (日) 機場專車接駁 (已預訂 11:00 發車)',
    checked: true,
    comment: '已訂妥 11:00 接駁車直達成田機場',
  },
  {
    id: 'esim',
    label: '購買 日本上網 eSIM / 漫遊網卡並確認啟用流程',
    checked: false,
    comment: '抵達日本後開啟漫遊即用',
  },
  {
    id: 'cash_currency',
    label: '準備日幣現金 (每人隨身約 1.5萬~2萬日圓，少數拉麵店與點餐機僅收現金)',
    checked: false,
    comment: '換好小面額鈔票',
  },
];

export const ITINERARY_DATA: DayPlan[] = [
  {
    date: '9/19 (六)',
    title: '台灣出發 ➔ 飛抵東京 ➔ 搭乘 Skyliner ➔ 入住 Airbnb',
    activities: [
      {
        time: '09:00 - 10:30',
        title: '出門去機場',
        description: '檢查隨身護照、機票憑證、行動電源、日幣與行李，出發前往機場辦理報到手續。',
        type: 'transport',
      },
      {
        time: '10:30 - 13:00',
        title: '抵達機場 · 報到托運與出境通關',
        description: '辦理航空公司登機手續與行李托運，通過隨身行李安檢與出境證照查驗，前往登機門候機。',
        type: 'transport',
      },
      {
        time: '13:00 - 17:15',
        title: '班機起飛 ✈️ 前往東京',
        description: '13:00 起飛，飛行時間約 3 小時 15 分鐘，預計 17:15 降落日本東京國際機場。在機上可再次確認 Visit Japan Web 入境 QR Code。',
        type: 'transport',
      },
      {
        time: '17:15 - 18:30',
        title: '抵達東京 · 入境審查與領取行李',
        description: '順利降落東京！使用 Visit Japan Web QR Code 快速通關辦理入境手續、提領托運行李並開通日本 eSIM 網路。',
        type: 'transport',
        locations: [
          {
            name: '成田國際機場 (NRT)',
            url: 'https://maps.app.goo.gl/kX72k1W2yZ7W2tqT9',
          },
        ],
      },
      {
        time: '18:30 - 20:00',
        title: '搭乘 Skyliner (Trip訂好票) + 地鐵 (Suica) 前往 Airbnb',
        description: '18:30 於京成電鐵櫃檯兌換 Trip.com 訂好之 Skyliner 車票，搭乘極速 Skyliner 直奔市區（約 36~41 分鐘），轉乘地鐵刷 iPhone Suica 前往 Airbnb。',
        type: 'transport',
        locations: [
          {
            name: '京成 Skyliner 乘車處',
            url: 'https://maps.app.goo.gl/kX72k1W2yZ7W2tqT9',
          },
        ],
      },
      {
        time: '20:00 - 22:30',
        title: '抵達 Airbnb 辦理入住放行李 · 宵夜散策',
        description: '20:00 順利抵達 Airbnb 放下厚重行李。周邊探索日本便利商店（7-Eleven / FamilyMart / Lawson）採買飲料零食，或在鄰近拉麵、居酒屋享用道地晚餐與宵夜，早點休息迎接明日行程！',
        type: 'accommodation',
      },
    ],
  },
  {
    date: '9/20 (日)',
    title: '三麗鷗彩虹樂園 Sanrio Puroland 夢幻一日遊',
    activities: [
      {
        time: '09:00 - 10:00',
        title: '出門出發前往三麗鷗彩虹樂園',
        description: '搭乘 新宿線 + 山手線 + 京王線，乘車時間約 1 小時，抵達「京王多摩中心站」步行約 5 分鐘抵達樂園。',
        type: 'transport',
        locations: [
          {
            name: '京王多摩中心站 (Sanrio 彩繪車站)',
            url: 'https://maps.app.goo.gl/pLHzH9q6f52s2v9h7',
          },
        ],
      },
      {
        time: '10:00 - 17:00',
        title: '暢遊三麗鷗彩虹樂園 (Sanrio Puroland)',
        description: '全室內夢幻主題樂園（門票已買好！持憑證即可入場）！不受天氣影響，暢玩 Kitty 女士之宅、美樂蒂大耳狗美照專區、觀看超精彩室內聲光大遊行表演、採購限定三麗鷗玩偶周邊，並在主題餐廳品嚐超可愛角色咖哩飯與造型甜點。',
        type: 'activity',
        locations: [
          {
            name: '三麗鷗彩虹樂園 (Sanrio Puroland)',
            url: 'https://maps.app.goo.gl/z9d3W3XnQy4E6m7z8',
          },
        ],
      },
      {
        time: '17:00 - 18:30',
        title: '17:00 閉園 · 搭乘京王線返回市區',
        description: '樂園於 17:00 閉園，搭乘京王線輕鬆返回東京市區（新宿/住宿周邊）。',
        type: 'transport',
      },
      {
        time: '18:30 - 21:00',
        title: '市區美味晚餐與逛街放鬆',
        description: '在市區享用熱騰騰的日式晚餐（天婦羅、燒肉或定食），回 Airbnb 整理戰利品。',
        type: 'food',
      },
    ],
  },
  {
    date: '9/21 (一)',
    title: '澀谷 ＆ 原宿 潮流巡禮 (PARCO·地瓜球快閃·燒肉·Hikarie·竹下通·Laforet·貓街)',
    activities: [
      {
        time: '10:00 - 12:00',
        title: '渋谷PARCO (動漫潮玩天堂)',
        description: '前往澀谷 PARCO 6F「CYBERSPACE SHIBUYA」：集結任天堂直營旗艦店 Nintendo TOKYO、Pokemon Center Shibuya、CAPCOM STORE、JUMP SHOP 等超強動漫電玩周邊與限定扭蛋。',
        type: 'shopping',
        locations: [
          {
            name: '渋谷PARCO (玩具/任天堂旗艦)',
            url: 'https://maps.app.goo.gl/n79y27fN1pnhJZ458',
          },
        ],
      },
      {
        time: '12:00 - 13:45',
        title: '午餐推薦：燒肉內臟 Araiya 澀谷 (超人氣名店)',
        description: '澀谷極具盛名的燒肉名店（建議提前線上預約）！厚切牛舌、極上橫膈膜與新鮮醃漬內臟炭火現烤，入口即化香氣四溢，Tabelog 評分高達 3.65+。',
        type: 'food',
        locations: [
          {
            name: '燒肉內臟 Araiya 澀谷 (Tabelog 預約)',
            url: 'https://tabelog.com/tw/tokyo/A1303/A130301/13237382/',
          },
        ],
      },
      {
        time: '14:00 - 15:00',
        title: '【免預約一般入場 14:00 開放】「えもじの子（地瓜球）」快閃店 @ LINE FRIENDS SQUARE SHIBUYA',
        description: '台灣爆紅 LINE 表情貼「地瓜球（えもじの子）」期間限定快閃店！官方規定 14:00 起免預約即可現場排隊入場。剛好吃完燒肉後步行至神南區 LINE FRIENDS SQUARE 1F（近 PARCO）第一波排隊進場，搶購多款超萌地瓜球娃娃、生活小物與消費滿額特典觀測卡！',
        type: 'shopping',
        locations: [
          {
            name: 'LINE FRIENDS SQUARE SHIBUYA 1F (地瓜球快閃店)',
            url: 'https://maps.google.com/?q=LINE+FRIENDS+SQUARE+SHIBUYA',
          },
          {
            name: '緯來日本台：地瓜球快閃店資訊與預約指引',
            url: 'https://japan.videoland.com.tw/jp_travel-article.php?id=4242',
          },
        ],
      },
      {
        time: '15:00 - 16:15',
        title: 'MEGAドン・キホーテ 渋谷本店 (DONKI 驚安殿堂)',
        description: '全澀谷最大 24 小時營業的 MEGA 唐吉訶德！多層樓面網羅各類美妝、藥妝、伴手禮零食、日本限定小物，現場支援免稅 Tax Free 退稅服務。',
        type: 'shopping',
        locations: [
          {
            name: 'MEGAドン・キホーテ 渋谷本店',
            url: 'https://maps.app.goo.gl/uaKs3HnYk8kjNiNJ7',
          },
        ],
      },
      {
        time: '16:15 - 17:30',
        title: '澀谷 Hikarie (渋谷ヒカリエ) ShinQs 店',
        description: '澀谷站東口直通的地標購物中心！地下 B2/B3「ShinQs 東橫的廉街」是全東京最夢幻的甜點伴手禮殿堂（HARBS 水果千層蛋糕、Pierre Hermé、排隊和洋菓子與頂級熟食），1F-5F 精選生活美妝與日本文創選物，適合午後享用甜點小憩與採買高質感伴手禮。',
        type: 'shopping',
        locations: [
          {
            name: '澀谷 Hikarie ShinQs',
            url: 'https://maps.google.com/?q=Shibuya+Hikarie+ShinQs',
          },
        ],
      },
      {
        time: '17:45 - 18:45',
        title: '原宿散策：竹下通 (Takeshita Street)',
        description: '原宿潮流文化發祥地！品嚐必吃日式薄皮可麗餅、探訪特色古著小店、拍貼機店與可愛系飾品雜貨。',
        type: 'shopping',
        locations: [
          {
            name: '原宿 竹下通 (逛街)',
            url: 'https://maps.app.goo.gl/7MtpFBxiHWosz68v5',
          },
        ],
      },
      {
        time: '18:45 - 19:45',
        title: 'Laforet 原宿 (ラフォーレ原宿 · 原宿潮流地標百貨)',
        description: '原宿最經典的時尚潮流象徵！地下一層半（B1.5F~B0.5F）至高樓層網羅日本動漫次文化、蘿莉塔/地雷系/龐克服飾品牌、獨家限定扭蛋專賣、以及深受年輕人喜愛的前衛設計師品牌。',
        type: 'shopping',
        locations: [
          {
            name: 'Laforet Harajuku (原宿拉法葉百貨)',
            url: 'https://maps.app.goo.gl/ZtjmTB7xPenuphHWA',
          },
        ],
      },
      {
        time: '19:45 - 21:00',
        title: '原宿散策：貓街 (Cat Street 裡原宿)',
        description: '漫步連結原宿至澀谷的悠閒潮流街道，林立眾多文青買手店、特色咖啡館、設計師品牌與潮流鞋店，氣氛愜意舒適。',
        type: 'shopping',
        locations: [
          {
            name: '原宿 貓街 (Cat Street)',
            url: 'https://maps.app.goo.gl/5AHF4HUxSipGwGiW8',
          },
        ],
      },
    ],
  },
  {
    date: '9/22 (二)',
    title: '自然醒 ➔ 池袋大巡禮 (吉伊卡哇 15:00·太陽城·動漫·壽喜燒)',
    activities: [
      {
        time: '10:30 - 11:15',
        title: '自然醒出發前往池袋',
        description: '睡到自然醒補足元氣！搭乘 新宿線 + 山手線 約 30 分鐘輕鬆抵達池袋站。',
        type: 'transport',
      },
      {
        time: '11:15 - 13:30',
        title: '太陽城 Sunshine City (逛街購物與美食午餐)',
        description: '池袋地標複合式大型商場！逛遍各樓層日系潮流服飾、雜貨生活選物、品嚐商場美食小吃，並順遊 Sanrio Gift Gate 池袋店採買三麗鷗周邊。',
        type: 'shopping',
        locations: [
          {
            name: '池袋 太陽城 (Sunshine City)',
            url: 'https://maps.app.goo.gl/edqpbjKn23SiF9Fm6',
          },
          {
            name: 'Sanrio Gift Gate 池袋店',
            url: 'https://maps.app.goo.gl/aiD3ZWHLixBp6dVJA',
          },
        ],
      },
      {
        time: '13:30 - 14:45',
        title: 'Pokémon Center Mega Tokyo (大型旗艦寶可夢中心 · 已開業)',
        description: '前往太陽城 2F 的大型旗艦寶可夢中心（已盛大開業營業中！），朝聖超巨大密勒頓、限定皮卡丘玩偶與最新寶可夢系列周邊商品。',
        type: 'shopping',
        locations: [
          {
            name: 'Pokémon Center Mega Tokyo',
            url: 'https://maps.app.goo.gl/5gYBz6vRk1r4beTZ6',
          },
        ],
      },
      {
        time: '15:00 - 17:00',
        title: '【重要預約 15:00】池袋 ちいかわパーク (Chiikawa Park 吉伊卡哇公園)',
        description: '吉伊卡哇門票已預約 15:00 入場！請提前 10-15 分鐘抵達現場憑證入場。沉浸在超萌吉伊卡哇主題空間（大概逛 2 小時），滿滿吉伊卡哇、小八貓、兔兔烏薩奇打卡場景、限定販售商品與萌度破表的大型公仔。',
        type: 'activity',
        locations: [
          {
            name: 'ちいかわパーク (Chiikawa Park)',
            url: 'https://maps.app.goo.gl/1aG5TRwa9nWRuVdz9',
          },
        ],
      },
      {
        time: '17:00 - 18:30',
        title: 'animate 池袋總店 (動漫旗艦殿堂)',
        description: '全球最大規模動漫旗艦店！9 層樓超豐富商品，從最新人氣動漫、輕小說、同人誌、模型到聲優 CD 一應俱全，採買完畢後漫步前往池袋西口。',
        type: 'shopping',
        locations: [
          {
            name: 'animate 池袋總店',
            url: 'https://maps.app.goo.gl/X6RTGAWqGAXYnDTx9',
          },
        ],
      },
      {
        time: '18:30 - 20:30',
        title: '晚餐盛宴：月亭 池袋店 (高級和牛壽喜燒)',
        description: '池袋西口知名高級壽喜燒・涮涮鍋料亭（建議提前預約）！精選 A5 和牛沾覆金黃生蛋液，濃郁鹹甜滋味令人難忘，在日式包廂中享受優雅時光。',
        type: 'food',
        locations: [
          {
            name: '月亭 池袋店 (壽喜燒)',
            url: 'https://maps.app.goo.gl/3EDfwxPp6596Hs2f6',
          },
        ],
      },
    ],
  },
  {
    date: '9/23 (三)',
    title: '直奔東京第一地標：東京晴空塔 ＆ 晴空街道 ➔ 銀座精緻漫步',
    activities: [
      {
        time: '10:00 - 15:30',
        title: '東京晴空塔 (Tokyo Skytree) ＆ 晴空街道 Solamachi 深度探索',
        description: '直接出發前往東京最高地標晴空塔！直通的巨型商場「東京晴空街道 Solamachi」擁有超過 300 家人氣品牌：必逛 Chiikawa Land (吉伊卡哇專賣店 晴空塔店)、Pokémon Center SKYTREE TOWN (寶可夢中心晴空塔店)、橡子共和國 (吉卜力龍貓)、Jump Shop 與日本動漫選物；中午於商場美食街品嚐人氣名店（六厘舍沾麵、利久牛舌或敘敘苑燒肉），亦可視天氣購票登上展望台俯瞰全東京天際線。',
        type: 'shopping',
        locations: [
          {
            name: '東京晴空塔 (Tokyo Skytree)',
            url: 'https://maps.app.goo.gl/s4X5y9T6dM1v7YpQ8',
          },
          {
            name: '東京晴空街道 (Tokyo Solamachi)',
            url: 'https://maps.app.goo.gl/4N3r6x7b1G2m5T8p9',
          },
          {
            name: 'Chiikawa Land 晴空塔店',
            url: 'https://maps.google.com/?q=Chiikawa+Land+Tokyo+Solamachi',
          },
        ],
      },
      {
        time: '15:30 - 18:30',
        title: '銀座 (Ginza) 高級時尚旗艦街區漫步',
        description: '搭乘地鐵至優雅精緻的銀座商圈！探訪 GINZA SIX、伊東屋 (G.Itoya 12層文具旗艦大樓)、Uniqlo 銀座全球旗艦店，享受高級都會氛圍。',
        type: 'shopping',
        locations: [
          {
            name: '銀座 GINZA SIX',
            url: 'https://maps.app.goo.gl/e4f5T6u7m2b3c4x57',
          },
          {
            name: '銀座 伊東屋 (G.Itoya)',
            url: 'https://maps.app.goo.gl/m7u8v9x1b2c3d4e58',
          },
        ],
      },
      {
        time: '18:30 - 21:00',
        title: '市區精緻晚餐與返回 Airbnb',
        description: '在銀座享用精緻晚餐（如銀座篝雞白湯拉麵、炸豬排或壽司），飯後輕鬆散步搭乘地鐵返回 Airbnb 休息。',
        type: 'food',
      },
    ],
  },
  {
    date: '9/24 (四)',
    title: '靜岡富士山絕景：三島天空步道 ＆ 大耳狗喜拿期間限定聯名一日遊',
    activities: [
      {
        time: '08:30 - 10:15',
        title: '搭乘新幹線＋接駁巴士直達三島天空步道',
        description: '從東京/品川站搭乘 JR 東海道新幹線（約 45 分鐘）快速抵達「JR 三島站」，於三島站南口 5 號站牌轉乘東海巴士（約 25 分鐘），舒適直達「三島天空步道」。沿途即可遠眺壯麗的富士山！',
        type: 'transport',
        locations: [
          {
            name: '三島站 (JR 東海道新幹線)',
            url: 'https://maps.google.com/?q=Mishima+Station',
          },
          {
            name: '三島天空步道 (Mishima Skywalk)',
            url: 'https://maps.google.com/?q=Mishima+Skywalk',
          },
        ],
      },
      {
        time: '10:15 - 12:45',
        title: '【期間限定聯名】三島天空步道 x 大耳狗喜拿 (Cinnamoroll) 富士山景漫步',
        description: '走上全長 400 公尺的日本第一長行人專用吊橋，飽覽壯麗的富士山與駿河灣全景！期間限定（9/12～11/4 第一彈）三麗鷗人氣巨星「大耳狗喜拿」聯名活動：\n• 專屬門票：活動期間吊橋門票採用限定大耳狗專屬設計。\n• 拍照打卡點：Tree Tree Tree 雙層拍照看板，以及ふろっく-福時計-、Mission Bay 等各處大耳狗限定立牌。\n• 紀念贈品：參與活動或點購特定餐點即可獲得活動版大耳狗貼紙！',
        type: 'activity',
        locations: [
          {
            name: '三島天空步道 (Mishima Skywalk)',
            url: 'https://maps.google.com/?q=Mishima+Skywalk',
          },
          {
            name: '活動專文介紹 (Have a Good Holiday)',
            url: 'https://www.haveagood-holiday.com/zh-TW/articles/mishima-skywalk-cinnamoroll-collaboration',
          },
        ],
      },
      {
        time: '12:45 - 14:15',
        title: '大耳狗聯名甜點飲品 ＆ 靜岡在地美食午餐',
        description: '在 Skywalk 美食區享用限定聯名餐點與在地美味：\n• 大耳狗天空軟冰淇淋聖代：三島天空步道招牌「天空霜淇淋」搭配葡萄柚蘇打與大耳狗造型裝飾。\n• 大耳狗好朋友天空蘇打：標誌性藍色荔枝蘇打，隨機贈送 6 款原創大耳狗吊飾之一。\n• 必吃在地特產：榮獲全日本金賞的「三島馬鈴薯可樂餅（みしまコロッケ）」與箱根麓豬排料理。',
        type: 'food',
        locations: [
          {
            name: 'Skywalk Soft Cream (霜淇淋與聯名甜點)',
            url: 'https://maps.google.com/?q=Mishima+Skywalk',
          },
        ],
      },
      {
        time: '14:15 - 15:45',
        title: '搶購大耳狗原創限定周邊 ＆ Sky Garden 花卉溫室天井',
        description: '前往 1 樓禮品店與 Sky Garden 紀念品區選購三島天空步道限定大耳狗周邊：\n• 托特包：印有戴著富士山造型帽的專屬大耳狗圖樣。\n• 絨毛鑰匙圈：大耳狗原創出遊設計玩偶吊飾。\n• 限定資料夾與 15cm 對景透明尺。\n選購後在鋪滿鮮花天花板的夢幻玻璃溫室「Sky Garden」漫步，享受浪漫森林微風與景觀。',
        type: 'shopping',
        locations: [
          {
            name: 'Sky Garden 紀念品區 & 花卉溫室',
            url: 'https://maps.google.com/?q=Mishima+Skywalk+Sky+Garden',
          },
        ],
      },
      {
        time: '15:45 - 17:30',
        title: '搭乘巴士返回三島站 ➔ 搭乘新幹線返抵東京市區',
        description: '從三島天空步道搭乘東海巴士（約 25 分鐘）返回 JR 三島站，可在車站商場選購靜岡銘菓鰻魚派、靜岡深蒸煎茶伴手禮。搭乘東海道新幹線快速返抵東京。',
        type: 'transport',
      },
      {
        time: '18:00 - 20:30',
        title: '東京市區美味晚餐 ＆ 輕鬆返回 Airbnb 整理戰利品',
        description: '返抵東京後享用美味晚餐（可選炭烤鰻魚飯、拉麵或居酒屋料理），早點返回 Airbnb 休息並開箱今天滿滿的大耳狗限定周邊！',
        type: 'food',
      },
    ],
  },
  {
    date: '9/25 (五)',
    title: '吉依卡哇 12:00 門票入場 ➔ 吉祥寺綠意漫步 ＆ 井之頭公園',
    activities: [
      {
        time: '10:30 - 11:45',
        title: '出發前往吉依卡哇場館',
        description: '搭乘大眾運輸前往吉依卡哇場館，提前抵達現場核對門票與預約憑證，準備開放入場。',
        type: 'transport',
      },
      {
        time: '11:45 - 14:00',
        title: '【重要預約 12:00】吉依卡哇 (Chiikawa) 門票入場 · 狂熱朝聖',
        description: '吉依卡哇門票已預約 12:00 入場！沉浸在超療癒的小可愛世界中，盡情打卡特色場景、搶購限定玩偶扭蛋與主題周邊（預計停留約 1.5~2 小時）。',
        type: 'activity',
        locations: [
          {
            name: 'ちいかわ 吉依卡哇會場',
            url: 'https://maps.app.goo.gl/1aG5TRwa9nWRuVdz9',
          },
        ],
      },
      {
        time: '14:00 - 15:30',
        title: '午餐美食與悠閒下午茶小憩',
        description: '在場館周邊人氣特色餐廳享用美味午餐，喝杯咖啡稍作休息，開箱剛買到的超萌戰利品與拍照打卡。',
        type: 'food',
      },
      {
        time: '15:30 - 18:30',
        title: '吉祥寺商圈漫步 ＆ 井之頭恩賜公園悠閒散策',
        description: '前往被評為最想居住街區的吉祥寺！漫步綠意盎然的井之頭恩賜公園享受自然芬多精，探訪吉祥寺 Sun Road 商店街、必吃排隊名店 Satou 黑毛和牛炸牛肉丸、鯛魚燒，以及風格各異的日式生活雜貨小店。',
        type: 'shopping',
        locations: [
          {
            name: '吉祥寺 Sun Road 商店街',
            url: 'https://maps.app.goo.gl/Dq7G5k4N2J8m3TzL8',
          },
          {
            name: '井之頭恩賜公園',
            url: 'https://maps.app.goo.gl/Yf6N2w8K3Q5s9VmB9',
          },
        ],
      },
      {
        time: '18:30 - 20:30',
        title: '吉祥寺特色晚餐與返回 Airbnb',
        description: '於吉祥寺口琴橫丁居酒屋或特色拉麵店享用豐盛晚餐，帶著滿滿戰利品搭乘電車返回 Airbnb。',
        type: 'food',
      },
    ],
  },
  {
    date: '9/26 (六)',
    title: '秋葉原動漫聖地 ＆ 頂級高空景觀 Buffet 盛宴',
    activities: [
      {
        time: '10:30 - 14:00',
        title: '秋葉原電氣街 (Akihabara) 深度漫遊',
        description: '全球御宅文化最高殿堂！探訪 Radio Kaikan (秋葉原無線電會館)、駿河屋、Mandarake 模型公仔店、扭蛋專門店與大型動漫商場 Yodobashi-Akiba。',
        type: 'shopping',
        locations: [
          {
            name: '秋葉原電氣街 / Radio Kaikan',
            url: 'https://maps.app.goo.gl/3wG7s5X9eK2b4YqM7',
          },
        ],
      },
      {
        time: '14:00 - 17:00',
        title: '神田萬世橋 ＆ 市區選物散策',
        description: '漫步至紅磚建造的歷史建築 mAAch ecute 神田萬世橋，享受文創設計小店與河畔景致。',
        type: 'activity',
      },
      {
        time: '17:30 - 20:30',
        title: '高空頂級景觀自助餐饗宴 (二選一預訂)',
        description: '旅程倒數之夜的頂級高空景觀 Buffet！\n① Sky Grill Buffet 武藏 (淺草豪景飯店 26F)：正對東京晴空塔絕美夜景，富士山熔岩石炭烤牛排與現做天婦羅。\n② VIEW & DINING THE SKY (新大谷飯店)：360度極致旋轉餐廳，全景俯瞰東京繁華夜景，主廚現煎鐵板燒與極品握壽司。',
        type: 'food',
        locations: [
          {
            name: 'Sky Grill Buffet 武藏 (淺草豪景 26F)',
            url: 'https://maps.app.goo.gl/rM9K7x4Q2W5b6TyL9',
          },
          {
            name: 'VIEW & DINING THE SKY (新大谷飯店)',
            url: 'https://maps.app.goo.gl/aC8K4x9Q2E7v5TmP8',
          },
        ],
      },
      {
        time: '21:00 - 23:00',
        title: '回 Airbnb 整理行李與戰利品打包',
        description: '整理幾天來的戰利品，依照免稅密封品、隨身電池與托運行李規範仔細打包，核對隔日退房時間。',
        type: 'accommodation',
      },
    ],
  },
  {
    date: '9/27 (日)',
    title: '退房搭乘 11:00 接駁車 ➔ 直達成田機場 ➔ 免稅採購 ➔ 平安返台',
    activities: [
      {
        time: '09:30 - 10:50',
        title: '退房準備與最後整理',
        description: '確認 Airbnb 房間收拾完畢，檢查護照、手機、錢包、貴重物品隨身攜帶，辦理鑰匙歸還與退房手續，前往約定上車點候車。',
        type: 'accommodation',
      },
      {
        time: '11:00 - 12:30',
        title: '【已預訂專車】11:00 機場接駁車出發直達機場',
        description: '準時搭乘已預約好的 11:00 機場專車接駁！免提沉重大行李爬地鐵轉車，舒適直達機場航廈，預計約 12:30 抵達成田機場。',
        type: 'transport',
      },
      {
        time: '13:00 - 15:00',
        title: '機場航空公司報到 · 行李托運與通關',
        description: '辦理登機證報到與托運行李秤重，順利通過隨身行李安檢與出境查驗。',
        type: 'transport',
      },
      {
        time: '15:00 - 17:00',
        title: '機場免稅店採買伴手禮 · 候機登機',
        description: '於機場免稅店採購經典日本伴手禮（白色戀人、Tokyo Banana、Royce 生巧克力、獺祭銘酒等），前往候機室準備登機。',
        type: 'shopping',
      },
      {
        time: '17:00 - 21:00',
        title: '搭機起飛 ✈️ 平安返回台灣溫暖的家',
        description: '搭乘班機返抵台灣，順利提領行李通關，為充實精采的 9 天東京自由行畫下完美句點！',
        type: 'transport',
      },
    ],
  },
];

export const TRAVEL_TIPS: TipCategory[] = [
  {
    id: 'entry',
    title: '證件與入境重要法規',
    iconName: 'file-text',
    badge: '必看！非常重要',
    items: [
      {
        subtitle: 'Visit Japan Web (VJW) 線上申報',
        content: '出發前請務必上日本官方 Visit Japan Web 登錄入境審查與海關申報，完成後截圖保存 QR Code（包含入境審查與海關申報 QR），降落時走電子通關閘門能大幅節省排隊時間。',
        highlight: true,
      },
      {
        subtitle: '嚴格禁止攜帶肉製品及動植物產品 (違者重罰)',
        content: '日本為防止非洲豬瘟等疫情，嚴厲禁止攜帶任何肉製品（包含肉乾、肉鬆、香腸、含肉塊泡麵、生熟肉類等）入境，違者最高可處 3 年以下有期徒刑或 300 萬日圓高額罰金！請行李出發前徹底清查。',
        warning: true,
      },
      {
        subtitle: '行動電源與鋰電池必須隨身攜帶',
        content: '行動電源、備用鋰電池「絕對不可托運」，必須放置在隨身隨身背包中登機；每人攜帶容量需符合航空規範（通常 100Wh~160Wh 限帶 2 顆），打火機一人限隨身攜帶 1 個普通打火機。',
        warning: true,
      },
      {
        subtitle: '免稅購物 (Tax Free) 最新出境規定',
        content: '在日本享 10% 退稅購買之消耗品（食品、藥妝等）會被店家密封在專用免稅袋內，出境日本前「絕對不可拆封使用」。海關在出境機場會透過護照連線核對免稅購買紀錄。',
        highlight: true,
      },
    ],
  },
  {
    id: 'money',
    title: '交通、支付與現金準備',
    iconName: 'credit-card',
    badge: '日常實用',
    items: [
      {
        subtitle: 'Suica / PASMO 西瓜卡使用守則',
        content: '東京自由行必備神卡！搭乘 JR 山手線、東京地鐵、都營地下鐵、私鐵、公車以及在便利商店消費、自動販賣機皆可感應扣款。持 iPhone 者可直接在 Apple 錢包中「加入交通卡」免押金秒綁定加值。',
        highlight: true,
      },
      {
        subtitle: '日幣現金準備建議',
        content: '雖然各大商場、大型連鎖店均可刷海外信用卡（或玉山熊本熊卡、富邦J卡、PayPay 街口），但許多道地老字號拉麵店、食券自動販賣機、神社御守與小吃攤「僅收日幣現金」。建議每人隨身常備 1.5 萬至 2 萬日圓現金。',
      },
      {
        subtitle: '東京鐵路轉乘與辨識技巧',
        content: '東京軌道系統分為 JR（山手線、中央線）、東京 Metro 地鐵、都營地下鐵與私鐵（京王線、京成線）。同一個鐵路系統內轉乘最便宜也最快速，搭乘時留意月台顏色與車站代號（如 G01、M08）。',
      },
      {
        subtitle: '日本計程車 (Taxi) 搭乘禮節',
        content: '日本計程車後門為「司機自動遙控開關」，請勿手動強行開關車門以免損壞機件。起步價約 500 日圓，深夜（22:00-05:00）會加乘 20% 車資。',
      },
    ],
  },
  {
    id: 'dining',
    title: '日本用餐文化與預約禮儀',
    iconName: 'utensils',
    badge: '在地體驗',
    items: [
      {
        subtitle: '人氣餐廳預約嚴禁「No-Show」(無故缺席)',
        content: '日本頂級燒肉（如 Araiya）、壽喜燒（月亭）或高空 Buffet 皆需提早預約。若行程異動，務必提前透過官方管道或 Tabelog 取消，絕對不可無故不到，否則將被收取 100% 違約金甚至影響日後訂位信譽。',
        warning: true,
      },
      {
        subtitle: '一人一餐點 (基本低消習慣)',
        content: '日本餐廳（尤其拉麵店、甜點咖啡廳、居酒屋）通常默認每位入座客人都需點一份主餐或飲品，不建議多人共食一份，亦不可在店內食用外帶食物與手搖飲。',
        highlight: true,
      },
      {
        subtitle: '結帳零錢托盤 (カレートレイ) 禮節',
        content: '付款與找零時，請將現金、信用卡放置於櫃檯的小托盤上，請勿直接將紙鈔硬幣遞到店員手中，這是日本通行的衛生與清點習慣。',
      },
      {
        subtitle: '居酒屋「お通し」(開胃小菜席位費)',
        content: '進居酒屋入座後，店家通常會主動送上一小碟開胃前菜，這屬於日本居酒屋特有的「席位服務費 (約 300~500 日圓/人)」，屬於正當收費項目並非算錯帳。',
      },
    ],
  },
  {
    id: 'living',
    title: '電壓插座、網路通訊與氣候',
    iconName: 'plug',
    badge: '設備必備',
    items: [
      {
        subtitle: '電壓 100V 與雙平腳插座 (Type A)',
        content: '日本電壓為 100V (50/60Hz)，插座為與台灣相同的「兩孔扁平插座」，手機充電器、相機充電器通常支援 100~240V 國際電壓，可直接插入免轉接頭；若有三孔插頭電器需自備三轉二接地接頭。',
        highlight: true,
      },
      {
        subtitle: '日本外遊 eSIM 啟用要點',
        content: '抵達日本機場並下機後，開啟手機行動網路中的 eSIM 漫遊開關，通常即可自動搜尋 Docomo / Softbank 基地台訊號。請在台灣出發前先將 QR Code 截圖列印或寄給旅伴備用。',
      },
      {
        subtitle: '9 月下旬東京氣候與穿搭建議',
        content: '9 月下旬東京平均氣溫約 19°C ~ 26°C，白天氣候宜人涼爽舒適，早晚微有涼意。建議採取「洋蔥式穿搭」，輕便短袖搭配一件薄外套或防風風衣，並隨身攜帶輕量晴雨傘以防偶陣雨。',
      },
      {
        subtitle: '隨身準備垃圾袋 (路上無垃圾桶)',
        content: '日本街道因治安與整潔考量極少設置公共垃圾桶（自動販賣機旁的回收桶僅能投空瓶罐）。出門時請隨身自備小塑膠袋，將垃圾裝好帶回 Airbnb 或便利商店分類丟棄。',
        highlight: true,
      },
    ],
  },
  {
    id: 'emergency',
    title: '實用電話與緊急聯絡清單',
    iconName: 'phone-call',
    badge: '備用安全',
    items: [
      {
        subtitle: '日本緊急求助熱線 (報警 / 救護車)',
        content: '警察報案：撥打「110」；火警、急救救護車：撥打「119」。公用電話緊急按鈕免投幣即可撥通。',
        warning: true,
      },
      {
        subtitle: '台灣駐日代表處 (台北駐日經濟文化代表處)',
        content: '旅外國人 24 小時急難救助專線：+81-80-1009-7179（日本境內直撥 080-1009-7179）。代表處總機：+81-3-3280-7811。地址：東京都港區白金台 5-20-2。',
        highlight: true,
      },
      {
        subtitle: '日本政府觀光局 (JNTO) 24hr 訪日旅客熱線',
        content: 'Japan Visitor Hotline 專線：050-3816-2720（提供 365 天 24 小時中、英、日、韓多語諮詢，支援事故、緊急醫療協助與災情資訊）。',
      },
      {
        subtitle: '急病醫療諮詢熱線 (#7119)',
        content: '若在東京都內突發急病或受傷，猶豫是否該叫救護車時，可撥打「#7119」（東京消防廳急救諮詢中心），由專業醫療人員提供應對建議。',
      },
    ],
  },
];

export const OFFICIAL_LINKS = [
  {
    name: 'Visit Japan Web 日本官方入境申報 (VJW)',
    url: 'https://www.vjw.digital.go.jp/',
  },
  {
    name: '日本政府觀光局 (JNTO) 繁體中文官網',
    url: 'https://www.japan.travel/tw/tw/',
  },
  {
    name: '京成電鐵 Skyliner 官方時刻表與資訊',
    url: 'https://www.keisei.co.jp/keisei/tetudou/skyliner/tc/index.php',
  },
  {
    name: '東京地鐵 (Tokyo Metro) 路線圖與營運狀況',
    url: 'https://www.tokyometro.jp/tcn/index.html',
  },
  {
    name: '三麗鷗彩虹樂園 (Sanrio Puroland) 官方中文網',
    url: 'https://tw.puroland.jp/',
  },
  {
    name: '東京晴空塔 (Tokyo Skytree) 官方中文網',
    url: 'https://www.tokyo-skytree.jp/cn_t/',
  },
  {
    name: '池袋太陽城 (Sunshine City) 官方中文指南',
    url: 'https://sunshinecity.jp/zh-tw/',
  },
];
