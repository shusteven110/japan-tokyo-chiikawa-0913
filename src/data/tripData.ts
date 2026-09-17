import { DayPlan, TodoItem, TipCategory } from '../types';

export const INITIAL_TODOS: TodoItem[] = [
  {
    id: 'vjw',
    label: '填寫 Visit Japan Web (VJW) 入境審查與海關申報 QR Code (已填好)',
    checked: true,
    comment: '已填寫完成！請截圖保存入境審查與海關申報 QR Code 便於離線通關',
    mapUrl: 'https://www.vjw.digital.go.jp/',
    mapName: 'VJW 官方網站',
  },
  {
    id: 'skyliner',
    label: '確認 Skyliner 車票 (已在 Trip.com 訂好票，出示憑證兌換)',
    checked: true,
    comment: 'Trip.com 已訂好票，抵達機場後兌換',
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
    id: 'ticket_skytree',
    label: '確認 9/23 (三) 東京晴空塔展望台 ＆ 墨田水族館 門票 (已買好票)',
    checked: true,
    comment: '已買妥！憑憑證 QR Code 登頂 350m 展望台 ＆ 參觀墨田水族館',
    mapUrl: 'https://maps.google.com/?q=Tokyo+Skytree',
    mapName: '東京晴空塔',
  },
  {
    id: 'ticket_skywalk',
    label: '確認 9/24 (四) 三島天空步道 (Mishima Skywalk) 門票 (已買好票)',
    checked: true,
    comment: '已買妥！大耳狗喜拿期間限定聯名票面',
    mapUrl: 'https://maps.google.com/?q=Mishima+Skywalk',
    mapName: '三島天空步道',
  },
  {
    id: 'ticket_disney',
    label: '確認 9/26 (六) 東京迪士尼樂園門票 一日護照 (已買好票)',
    checked: true,
    comment: '已買妥！請確認已將門票 QR Code 綁定入 Tokyo Disney Resort 官方 App',
    mapUrl: 'https://maps.google.com/?q=Tokyo+Disneyland',
    mapName: '東京迪士尼樂園',
  },
  {
    id: 'chiikawa_922',
    label: '確認 9/22 (二) 池袋吉依卡哇門票 (已預約 15:00 入場)',
    checked: true,
    comment: '門票時間：9/22 15:00',
    mapUrl: 'https://maps.app.goo.gl/1aG5TRwa9nWRuVdz9',
    mapName: 'Chiikawa Park 池袋',
  },
  {
    id: 'chiikawa_925',
    label: '確認 9/25 (五) 吉依卡哇門票 (已預約 12:00 入場)',
    checked: true,
    comment: '門票時間：9/25 12:00',
    mapUrl: 'https://maps.app.goo.gl/1aG5TRwa9nWRuVdz9',
    mapName: 'Chiikawa 吉依卡哇',
  },
  {
    id: 'restaurant_araiya',
    label: '確認 9/21 (一) 20:00 燒肉內臟 Araiya 澀谷 (已確定預約 2 位)',
    checked: true,
    comment: '已預約 9/21 20:00 (2位)，極難訂位 Tabelog 3.65+ 燒肉名店',
    mapUrl: 'https://maps.google.com/?q=Yakiniku+Hormone+Arai-ya+Shibuya',
    mapName: '燒肉內臟 Araiya 澀谷',
  },
  {
    id: 'restaurant_imahan',
    label: '確認 9/22 (二) 19:30 人形町今半 池袋東武店 和牛壽喜燒 (已確定預約 2 位)',
    checked: true,
    comment: '已預約 9/22 19:30 (2位)，百年壽喜燒天花板名店 (池袋東武百貨 15F 餐廳街)',
    mapUrl: 'https://maps.google.com/?q=Ningyocho+Imahan+Ikebukuro+Tobu',
    mapName: '人形町今半 池袋東武店',
  },
  {
    id: 'airport_shuttle_927',
    label: '確認 9/27 (日) 機場專車接駁 (已預訂 11:00 發車)',
    checked: true,
    comment: '已訂妥 11:00 接駁車直達成田機場',
  },
  {
    id: 'esim',
    label: '確認 日本上網 eSIM / 漫遊網卡 (已買好)',
    checked: true,
    comment: '已買妥！請保存好啟用 QR Code，抵達日本後開啟漫遊即用',
  },
  {
    id: 'cash_currency',
    label: '準備日幣現金 (每人隨身約 1.5萬~2萬日圓，已準備就緒)',
    checked: true,
    comment: '已準備妥當！小面額鈔票與零錢備妥，用於扭蛋、神社祈願與部分拉麵投幣機',
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
        title: '17:00 閉園 · 搭乘京王線返回東京市區',
        description: '樂園於 17:00 閉園，搭乘京王線輕鬆返回東京市區（新宿/住宿周邊）。',
        type: 'transport',
      },
      {
        time: '18:30 - 21:00',
        title: '市區美味晚餐與逛街放鬆',
        description: '在市區享用熱騰騰的日式晚餐（天婦羅、燒肉或定食），回 Airbnb 整理戰利品、好好休息迎接明日潮流採購！',
        type: 'food',
      },
    ],
  },
  {
    date: '9/21 (一)',
    title: '新宿三麗鷗旗艦 ➔ 澀谷＆原宿潮流巡禮 (Sanrio House 10:00整理券·地瓜球·PARCO·原宿·燒肉18:00)',
    activities: [
      {
        time: '09:45 - 10:00',
        title: '早起出發前往新宿站南口 (LUMINE 2)',
        description: '搭乘地鐵至「新宿站」，由南口出站直通 LUMINE 2，提早抵達現場排隊準備領取 10:00 開發的整理券。',
        type: 'transport',
      },
      {
        time: '10:00 - 12:00',
        title: '【官方最新公告：10:00~10:20 整理券發放】新宿 LUMINE 2：Sanrio House BY MASH 旗艦朝聖',
        description: '三麗鷗與日本時尚巨頭 MASH 聯手打造的超人氣新地標（新宿 LUMINE 2 的 2F）：\n■ 最新官方整理券發放規則（2026/9月最新公告）：\n• 10:00〜10:20：工作人員於指定隊伍引導並發放整理券（每人限領 1 張，發完為止）！請提早於 09:45~10:00 抵達現場配合排隊。\n• 10:30 以後：依整理券梯次時間於 2F Sanrio House 店舖前引導進店。\n■ 必搶限定：HELLO KITCHEN 烘焙系列（像夾剛出爐麵包般用夾子挑選玩偶，附原創烘焙紙袋包裝）、gelato pique 聯名毛絨居家服套裝、Hello Kitty 蝴蝶結保溫杯、淡雅心形金屬吊飾與方形鐵盒餅乾！',
        type: 'shopping',
        locations: [
          {
            name: 'Sanrio House BY MASH (新宿 LUMINE 2 2F)',
            url: 'https://maps.google.com/?q=LUMINE+Shinjuku+LUMINE+2',
          },
          {
            name: '官方最新整理券公告 (MASH 官網)',
            url: 'https://mashstylelab.jp/sanriohouse/Page/News/Shop/detail/2026/0902.aspx',
          },
          {
            name: '購物攻略報導 (Dream & Hunter)',
            url: 'https://dream.bhuntr.com/article/sanrio-house-japan',
          },
        ],
      },
      {
        time: '12:00 - 12:20',
        title: '搭乘山手線前往澀谷 (僅 5 分鐘車程)',
        description: '採買完畢後從新宿南口進站，搭乘 JR 山手線（1 站約 5 分鐘）直達澀谷站八公口。',
        type: 'transport',
      },
      {
        time: '12:20 - 13:45',
        title: '【隨到隨吃 · 免預約午餐】澀谷人氣特色美食 (極味屋漢堡排 / PARCO B1 美食街 / 一蘭)',
        description: '午間不排預約制餐廳，行程自在彈性！可於澀谷 PARCO B1 美食街「CHAOS KITCHEN」、極味屋鐵板漢堡排、一蘭拉麵、或神南商圈周邊特色咖啡簡餐隨性挑選，無需預約、隨到隨吃無時間壓力。',
        type: 'food',
        locations: [
          {
            name: '澀谷 PARCO B1 美食街 (CHAOS KITCHEN)',
            url: 'https://maps.app.goo.gl/n79y27fN1pnhJZ458',
          },
        ],
      },
      {
        time: '14:00 - 14:45',
        title: '【免預約一般入場 14:00 開放】「えもじの子（地瓜球）」快閃店 @ LINE FRIENDS SQUARE SHIBUYA',
        description: '台灣爆紅 LINE 表情貼「地瓜球（えもじの子）」期間限定快閃店！官方規定 14:00 起免預約即可現場排隊入場。剛好吃完午餐後步行至神南區 LINE FRIENDS SQUARE 1F（近 PARCO）第一波排隊進場，搶購多款超萌地瓜球娃娃、生活小物與消費滿額特典觀測卡！',
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
        time: '14:45 - 16:00',
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
        time: '16:00 - 18:00',
        title: '原宿潮流巡禮：竹下通 ＆ Laforet 原宿潮流地標百貨',
        description: '搭乘山手線 1 站（或由神南沿貓街散步）前往原宿！品嚐必吃日式薄皮可麗餅、探訪特色古著小店、拍貼機店；走訪 Laforet 原宿探索地下次文化服飾與獨家限定扭蛋。',
        type: 'shopping',
        locations: [
          {
            name: '原宿 竹下通 (逛街)',
            url: 'https://maps.app.goo.gl/7MtpFBxiHWosz68v5',
          },
          {
            name: 'Laforet Harajuku (原宿拉法葉百貨)',
            url: 'https://maps.app.goo.gl/ZtjmTB7xPenuphHWA',
          },
        ],
      },
      {
        time: '18:00 - 19:45',
        title: '澀谷漫步：MEGA 唐吉訶德 澀谷本店 採買 ＆ 宮下公園',
        description: '晚餐前前往道玄坂 MEGA 唐吉訶德！多層樓面網羅美妝保養、日本限定零食、動漫伴手禮，支援 Tax Free 免稅服務；或至 MIYASHITA PARK (宮下公園) 頂樓空中花園拍照打卡，準備準時赴約。',
        type: 'shopping',
        locations: [
          {
            name: 'MEGAドン・キホーテ 渋谷本店',
            url: 'https://maps.app.goo.gl/uaKs3HnYk8kjNiNJ7',
          },
          {
            name: 'MIYASHITA PARK (宮下公園)',
            url: 'https://maps.google.com/?q=Miyashita+Park',
          },
        ],
      },
      {
        time: '20:00 - 21:45',
        title: '【已確定預約 20:00 晚餐盛宴】燒肉內臟 Araiya 澀谷 (超人氣名店 · 2位)',
        description: '準時 20:00 抵達（已確定預約 2 位）！澀谷極具盛名的 Tabelog 3.65+ 頂級燒肉名店！必點傳奇厚切牛舌、極上橫膈膜與新鮮醃漬內臟炭火現烤，入口即化肉汁四溢。',
        type: 'food',
        locations: [
          {
            name: '燒肉內臟 Araiya 澀谷 (Yakiniku Hormone Arai-ya)',
            url: 'https://maps.google.com/?q=Yakiniku+Hormone+Arai-ya+Shibuya',
          },
          {
            name: 'Araiya 澀谷 Tabelog 頁面',
            url: 'https://tabelog.com/tw/tokyo/A1303/A130301/13237382/',
          },
        ],
      },
      {
        time: '21:45 - 22:30',
        title: '澀谷十字路口夜景散策 ➔ 搭車返回 Airbnb 休息',
        description: '享用完頂級炭火燒肉後，散步至澀谷經典大十字路口感受東京繁華夜景，搭乘地鐵輕鬆返回 Airbnb 休息。',
        type: 'transport',
      },
    ],
  },
  {
    date: '9/22 (二)',
    title: '自然醒 ➔ 池袋大巡禮 (吉伊卡哇 15:00·animate旗艦·【人形町今半 19:30】)',
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
        time: '17:00 - 19:00',
        title: 'animate 池袋總店 ＆ 漫步至池袋西口東武百貨 (Tobu 15F)',
        description: '全球最大規模動漫旗艦店！9 層樓超豐富商品，從最新人氣動漫、輕小說、同人誌、模型到聲優 CD 一應俱全，採買完畢後漫步前往西口東武百貨準備享用晚餐。',
        type: 'shopping',
        locations: [
          {
            name: 'animate 池袋總店',
            url: 'https://maps.app.goo.gl/X6RTGAWqGAXYnDTx9',
          },
          {
            name: '池袋 東武百貨 (Tobu 15F 餐廳街)',
            url: 'https://maps.google.com/?q=Tobu+Department+Store+Ikebukuro',
          },
        ],
      },
      {
        time: '19:30 - 21:30',
        title: '【已確定預約 19:30 頂級和牛盛宴】人形町今半 池袋東武店 (2位)',
        description: '準時 19:30 抵達池袋東武百貨 15F（已確定預約 2 位）！日本壽喜燒界殿堂級百年名店「人形町今半」！極上黑毛和牛由專業仲居桌邊現煮，油花如大理石般細膩均勻，裹上滑嫩生蛋液入口即化，享受極致奢華的味覺饗宴。',
        type: 'food',
        locations: [
          {
            name: '人形町今半 池袋東武店 (東武百貨 15F)',
            url: 'https://maps.google.com/?q=Ningyocho+Imahan+Ikebukuro+Tobu',
          },
        ],
      },
      {
        time: '21:30 - 22:30',
        title: '池袋夜景散策 ➔ 搭乘電車返回 Airbnb 休息',
        description: '品嚐完極品壽喜燒後，心滿意足散步回車站，搭乘電車返回住宿休息，為隔天晴空塔與銀座行程充飽體力。',
        type: 'transport',
      },
    ],
  },
  {
    date: '9/23 (三)',
    title: '晴空塔 ＆ 墨田水族館 ➔ 銀座【Sanrio World Ginza】全球最大旗艦店 ＆ 銀座隨性美食',
    activities: [
      {
        time: '10:00 - 13:00',
        title: '東京晴空塔 ＆ 晴空街道 Solamachi 潮流選物與美食午餐',
        description: '出發前往東京第一高地標晴空塔！商場「東京晴空街道 Solamachi」匯聚超過 300 家店舖：必逛 Chiikawa Land (吉伊卡哇專賣店 晴空塔店)、Pokémon Center SKYTREE TOWN (寶可夢中心晴空塔店)、橡子共和國 (吉卜力龍貓)、Jump Shop 與日本動漫選物；中午於美食街品嚐人氣名店（六厘舍沾麵、利久牛舌或敘敘苑燒肉），亦可視天氣現場購票登上展望台俯瞰東京全景。',
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
        time: '13:00 - 15:30',
        title: '【夢幻海洋世界】墨田水族館 (Sumida Aquarium · 晴空街道 5F-6F)',
        description: '位於晴空塔直通的晴空街道西館 5F~6F，日本頂級高質感室內水族館！\n• 日本最大室內開放水池：超近距離觀賞麥哲倫企鵝游泳、跳躍與超萌進食模樣。\n• 萬花筒水母大水槽 (Big Schale)：宛如漫步宇宙的夢幻水母圓盤光影展區，極致療癒。\n• 超人氣「花園鰻」沙地探頭晃動區、江戶風情金魚主題迴廊。\n• 企鵝咖啡廳：點一杯招牌藍色「企鵝漂浮冰淇淋蘇打」或水母棉花糖特調，享受愜意午後時光。',
        type: 'activity',
        locations: [
          {
            name: '墨田水族館 (Sumida Aquarium)',
            url: 'https://maps.google.com/?q=Sumida+Aquarium',
          },
        ],
      },
      {
        time: '16:00 - 18:45',
        title: '【全球最大三麗鷗旗艦】Sanrio World Ginza (三麗鷗世界 銀座) ＆ 銀座漫步',
        description: '搭乘地鐵至銀座！\n• 核心朝聖【Sanrio World Ginza (三麗鷗世界 銀座)】：全球規模最大的三麗鷗直營旗艦店（位於西銀座百貨 Nishi Ginza 1F-2F）！1 樓匯集大人感聯名精品、精緻包款飾品、美妝與東京限定伴手禮；2 樓則為全角色夢幻大殿堂，Hello Kitty、大耳狗喜拿、酷洛米、美樂蒂、帕恰狗等海量玩偶公仔、生活文具雜貨一次買齊！\n• 銀座街區漫步：逛完三麗鷗後可同步探訪伊東屋 (G.Itoya 12層文具大樓)、GINZA SIX，感受銀座奢華高雅的街區風情。',
        type: 'shopping',
        locations: [
          {
            name: '三麗鷗世界 銀座 (Sanrio World Ginza)',
            url: 'https://maps.app.goo.gl/3b1pAsgfHhgeJzQ57',
          },
          {
            name: '銀座 伊東屋 (G.Itoya)',
            url: 'https://maps.app.goo.gl/m7u8v9x1b2c3d4e58',
          },
          {
            name: '銀座 GINZA SIX',
            url: 'https://maps.app.goo.gl/e4f5T6u7m2b3c4x57',
          },
        ],
      },
      {
        time: '18:30 - 21:00',
        title: '【隨到隨吃 · 免預約】銀座人氣美食隨選 (銀座篝雞白湯拉麵 / GINZA SIX / 炸豬排)',
        description: '晚餐隨興自在挑選，免去預約時間壓力！推薦銀座周邊美食：\n• 銀座篝 (Ginza Kagari)：米其林指南推薦必吃超濃郁松露雞白湯拉麵。\n• GINZA SIX 6F 美食街：高雅日式天婦羅、壽司與和食。\n• 銀座梅林：老字號極厚酥脆炸豬排。\n• 西銀座百貨 / 有樂町 ITOCiA 美食街：平價拉麵與洋食簡餐。\n飯後悠閒散步漫遊銀座璀璨夜景，搭乘地鐵返回 Airbnb 休息。',
        type: 'food',
        locations: [
          {
            name: '銀座篝 本店 (Ginza Kagari)',
            url: 'https://maps.google.com/?q=Ginza+Kagari',
          },
          {
            name: 'GINZA SIX 6F 美食街',
            url: 'https://maps.app.goo.gl/e4f5T6u7m2b3c4x57',
          },
        ],
      },
      {
        time: '21:00 - 22:00',
        title: '銀座璀璨夜景漫步 ➔ 搭乘地鐵返回 Airbnb 休息',
        description: '漫步感受銀座夜晚靜謐奢華的街道燈景，搭乘地鐵輕鬆返回住宿休息，為隔天清晨出發靜岡三島天空步道養精蓄銳。',
        type: 'transport',
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
    title: '夢幻奇蹟之日：東京迪士尼樂園 (Tokyo Disneyland) 全日暢玩攻略',
    activities: [
      {
        time: '07:00 - 08:15',
        title: '早起出發前往舞濱站 ➔ 抵達東京迪士尼樂園',
        description: '早起檢查隨身物品（行動電源、門票 QR Code、野餐墊），搭乘地鐵至「新木場站」轉乘 JR 京葉線至「舞濱站 (Maihama)」，步行約 5 分鐘抵達東京迪士尼樂園正門安檢處，提早排隊等候開園。',
        type: 'transport',
        locations: [
          {
            name: '舞濱站 (JR 京葉線)',
            url: 'https://maps.google.com/?q=Maihama+Station',
          },
          {
            name: '東京迪士尼樂園 (Tokyo Disneyland)',
            url: 'https://maps.google.com/?q=Tokyo+Disneyland',
          },
        ],
      },
      {
        time: '08:30 - 12:00',
        title: '入園衝刺 ＆ 迪士尼 App 快速預約 ＆ 人氣設施巡禮',
        description: '順利入園！第一時間打開 Tokyo Disney Resort App：\n1. 購買 DPA (迪士尼尊享卡)：搶購「美女與野獸：城堡奇緣」避免漫長排隊！\n2. 預約免費 40 週年優先通行證：太空山 / 巨雷山 / 幽靈公館 / 飛濺山。\n3. 抽遊行表演 / 報名體驗 (Entry Request)。\n隨後漫步世界市集、於灰姑娘城堡前留下經典紀念合照，暢玩明日世界或夢幻樂園熱門設施。',
        type: 'activity',
        locations: [
          {
            name: '美女與野獸：城堡奇緣',
            url: 'https://maps.google.com/?q=Enchanted+Tale+of+Beauty+and+the+Beast',
          },
        ],
      },
      {
        time: '12:00 - 13:30',
        title: '【隨到隨吃 · 免預約】迪士尼主題快餐 ＆ 經典特色小吃',
        description: '整天輕鬆隨意吃，免去預約餐廳的時間限制！\n• 必吃經典點心：巨無霸煙燻火雞腿、米奇造型手套刈包、綠色三眼怪麻糬、造型爆米花桶。\n• 免預約快餐廳：紅心女王宴會廳、明日樂園舞台餐廳（米奇漢堡）、頑熊餐廳（香濃咖哩飯），直接排隊取餐入座。',
        type: 'food',
        locations: [
          {
            name: '紅心女王宴會廳 (Queen of Hearts Banquet Hall)',
            url: 'https://maps.google.com/?q=Queen+of+Hearts+Banquet+Hall',
          },
        ],
      },
      {
        time: '13:30 - 17:30',
        title: '日間旗艦大遊行「Disney Harmony in Color」＆ 人氣設施與採買',
        description: '觀賞萬眾矚目的日間大遊行「迪士尼眾彩交融 (Harmony in Color)」：米奇、皮克斯角色、動物方城市與冰雪奇緣繽紛花車璀璨登場！午後暢玩加勒比海盜、小熊維尼獵蜜記、巨雷山，並在各特色商店選購限定玩偶、造型髮箍與伴手禮。',
        type: 'activity',
      },
      {
        time: '17:30 - 19:30',
        title: '【隨意享用】園內美味晚餐 ＆ 暮色城堡童話氛圍',
        description: '點亮夜燈的灰姑娘城堡倒映在護城河上，無比浪漫！在園內快速餐廳隨興享用晚餐（如廣場餐廳、小木偶披薩等，免預約直接點餐入座），吃飽後為接下來的夜間壓軸表演養精蓄銳。',
        type: 'food',
      },
      {
        time: '19:30 - 21:00',
        title: '【壓軸夜間盛典】夢之光電子大遊行 ＆ 城堡夜間煙火秀',
        description: '觀賞震撼人心的夜間大遊行「東京迪士尼樂園電子大遊行～夢之光 (Dreaming Up/Dreamlights)」：數百萬顆 LED 璀璨燈光流動，伴隨動人經典迪士尼旋律；隨後欣賞「迪士尼空中奇航」城堡高空璀璨煙火秀，為迪士尼一日遊畫下完美句點！',
        type: 'activity',
      },
      {
        time: '21:00 - 22:30',
        title: '依依不捨告別迪士尼 ➔ 搭車返回 Airbnb 休息與打包行李',
        description: '隨散場人潮步行至舞濱站，搭乘 JR 京葉線返抵東京市區，回到 Airbnb 休息。由於明天即將退房，今晚順手整理這幾天滿滿的戰利品並預先打包行李。',
        type: 'transport',
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
    id: 'dinner_guide',
    title: '9 天每日晚餐地圖 ＆ 周邊人氣美食街推薦',
    iconName: 'utensils',
    badge: '9 天晚餐精選靈感',
    items: [
      {
        subtitle: 'Day 1 (9/19 六) 抵達日 · 新宿大久保 / Airbnb 周邊晚鳥美食',
        content: '抵達 Airbnb 放好行李約 20:30~21:00，適合不需預約的深夜美味：\n• 麵屋武藏 新宿總店：濃厚豚骨魚介拉麵與巨無霸炙燒叉燒。\n• 鳥貴族 (新宿/大久保店)：均一價平價美味炭火烤雞肉串居酒屋。\n• 新宿歌舞伎町：一蘭拉麵、敘敘苑燒肉、或大久保道地韓式現烤五花肉街。',
        highlight: true,
      },
      {
        subtitle: 'Day 2 (9/20 日) 三麗鷗彩虹樂園 ➔ 新宿南口 / 高島屋 / LUMINE 美食街',
        content: '彩虹樂園閉園返回新宿約 18:30~19:30：\n• 新宿高島屋 12F~14F「Restaurants Park」：推薦名代豬排 Katsukura (酥脆炸豬排)、赤坂離宮中華料理、築地玉壽司。\n• LUMINE EST 7F~8F 美食街：和牛漢堡排、牛かつ もと村 (炸牛元村 新宿南口店)、AFURI 柚子鹽拉麵。\n• 新宿新南口 NEWoMan 美食區：藍瓶咖啡、手作窯烤披薩與日式居酒屋。',
        highlight: true,
      },
      {
        subtitle: 'Day 3 (9/21 一) 澀谷潮流日 · ⭐【已確定預約 20:00】燒肉內臟 Araiya 澀谷',
        content: '★ 已確定預約 20:00（2位）！準時抵達道玄坂名店「燒肉內臟 Araiya 澀谷」，享用極品厚切牛舌與炭火現烤和牛內臟！\n• 備選/宵夜/周邊：澀谷 PARCO B1「CHAOS KITCHEN」地下美食街、MIYASHITA PARK「澀谷橫丁」復古大排檔居酒屋、極味屋鐵板漢堡排。',
        highlight: true,
      },
      {
        subtitle: 'Day 4 (9/22 二) 池袋動漫日 · ⭐【已確定預約 19:30】人形町今半 池袋東武店',
        content: '★ 已確定預約 19:30（2位）！準時抵達池袋東武百貨 15F 餐廳街，品嚐創立於明治 28 年的國寶級「人形町今半」頂級黑毛和牛壽喜燒！\n• 備選/甜點/周邊：東武百貨 11F~15F 巨大美食街「SPICE」、太陽城 Sunshine City 美食街、麵創房無敵家拉麵、炸牛元村池袋店。',
        highlight: true,
      },
      {
        subtitle: 'Day 5 (9/23 三) 晴空塔 ➔ 銀座【Sanrio World Ginza】周邊隨興精緻晚餐',
        content: '逛完西銀座三麗鷗世界旗艦店後 (18:30~21:00) 隨心挑選：\n• 銀座篝 (Ginza Kagari 本店)：米其林指南推薦必吃超濃郁松露雞白湯拉麵。\n• GINZA SIX 6F 美食街：高雅日式天婦羅、和牛壽喜燒、精緻壽司。\n• 銀座梅林：老字號酥脆厚切炸豬排；或煉瓦亭日式元祖洋食蛋包飯。\n• 有樂町 ITOCiA / LUMINE 美食街：平價日式定食、拉麵與居酒屋。',
        highlight: true,
      },
      {
        subtitle: 'Day 6 (9/24 四) 靜岡三島天空步道 ➔ 返抵東京站 / 新宿周邊晚餐',
        content: '搭乘新幹線下午返回東京站或新宿 (18:00~20:00)：\n• 東京站一番街「東京拉麵街」：六厘舍沾麵、斑鳩拉麵、雷拉麵；或地下「黑塀橫丁」居酒屋。\n• 新宿 Omoide Yokocho (思出橫丁 / 回憶橫丁)：滿滿日式懷舊煙火氣息的炭火串燒與居酒屋小店。\n• 三島站在地名物（若返程前在靜岡吃）：三島鰻魚飯名店（櫻家鰻魚飯）、沼津港直送海鮮丼。',
        highlight: true,
      },
      {
        subtitle: 'Day 7 (9/25 五) 吉祥寺 ➔ 下北澤 ➔ 澀谷 / 新宿文青夜生活美食',
        content: '逛完口琴橫丁與下北澤文青街後 (18:30~21:00)：\n• 吉祥寺口琴橫丁：肉之佐藤 (超人氣炸牛肉丸)、炭烤雞肉串與特色居酒屋小館。\n• 下北澤古著街：Magic Spice 湯咖哩、Rojiura Curry SAMURAI 濃厚野菜湯咖哩。\n• 新宿西口 / 歌舞伎町：利久炭烤牛舌定食、磯丸水產 (24hr 現烤活海鮮)。',
        highlight: true,
      },
      {
        subtitle: 'Day 8 (9/26 六) 東京迪士尼樂園全日遊 · 園區內外快餐與小吃攻略',
        content: '全日輕鬆隨意吃，免去預約時間限制：\n• 園區必吃明星小吃：巨無霸煙燻火雞腿、米奇手套刈包、綠色三眼怪麻糬、限定口味造型爆米花桶。\n• 免排預約快速餐廳：明日樂園舞台餐廳（米奇造型漢堡）、頑熊餐廳（香濃咖哩飯）、紅心女王宴會廳。\n• 舞濱站外「Ikspiari 伊克斯皮兒莉」購物商城 4F 美食街：一風堂拉麵、青葉拉麵、美式牛排。',
        highlight: true,
      },
      {
        subtitle: 'Day 9 (9/27 日) 退房前往成田機場 · 航廈美食街與免稅伴手禮',
        content: '11:00 接駁車直達成田機場，13:00~17:00 候機時光：\n• 成田機場第 1 / 第 2 航廈出境前美食街：富田沾麵 (中華蕎麥 とみた)、築地壽司岩、謝朋殿中華料理。\n• 出境管制區內免稅美食：星巴克、抹茶甜點焙茶霜淇淋、Fa-So-La 免稅店伴手禮試吃選購。',
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
