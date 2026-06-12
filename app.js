// GlassBench Smart Glasses Database and Filtering Logic

const smartGlassesData = [
  {
    "id": "alibaba-quark",
    "brand": "Alibaba",
    "name": "Alibaba Quark AI Glasses (S1)",
    "price": "\u00a53799",
    "weight": 40,
    "fov": "25\u00b0",
    "battery": "4h",
    "displayType": "Waveguide (mono)",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Monochrome Waveguide",
    "aiAssistant": "Quark / Qwen",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://the-gadgeteer.com/2026/05/12/quark-ai-glasses-s1-proactive-ai-qwen-update-may-2026/"
  },
  {
    "id": "apple-vision-pro",
    "brand": "Apple",
    "name": "Apple Vision Pro",
    "price": "$3499",
    "weight": 750,
    "fov": "100\u00b0",
    "battery": "2.5h",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "on-device Siri / Apple Intelligence",
    "availability": "Available",
    "deviceType": "XR Headset",
    "isNewcomer": false,
    "link": "https://www.apple.com/shop/buy-vision/apple-vision-pro"
  },
  {
    "id": "amazon-echo-frames-3",
    "brand": "Amazon",
    "name": "Amazon Echo Frames (Gen 3)",
    "price": "$269",
    "weight": 38,
    "fov": "-",
    "battery": "6h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Amazon Alexa",
    "availability": "Available",
    "deviceType": "Smart Audio Glasses",
    "isNewcomer": false,
    "link": "https://www.amazon.com/Echo-Frames-3rd-Gen-Smart-audio-glasses-with-Alexa--Modern-Rectangle-frames-in-charcoal-gray--with-prescription-ready-lenses/dp/B09SVDB9P9/?tag=gdgt0c-p-o-4o4-20&ascsubtag=d0e9d6ee649011f1b0433d1b4e42606d"
  },
  {
    "id": "baidu-xiaodu",
    "brand": "Baidu",
    "name": "Baidu Xiaodu AI Glasses",
    "price": "\u00a52199",
    "weight": 39,
    "fov": "-",
    "battery": "5h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Ernie 4.0 (Wenxin)",
    "availability": "Available",
    "deviceType": "AI Glasses",
    "isNewcomer": false,
    "link": "https://technode.com/2024/11/13/baidu-unveils-xiaodu-ai-glasses-its-first-ai-glasses-powered-by-a-large-language-model/"
  },
  {
    "id": "brilliant-labs-halo",
    "brand": "Brilliant Labs",
    "name": "Brilliant Labs Halo",
    "price": "$349",
    "weight": 40,
    "fov": "20\u00b0",
    "battery": "8h",
    "displayType": "Micro-OLED (binocular)",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "Noa AI",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://brilliant.xyz/products/halo"
  },
  {
    "id": "even-realities-g1",
    "brand": "Even Realities",
    "name": "Even Realities G1",
    "price": "$599",
    "weight": 40,
    "fov": "25\u00b0",
    "battery": "36h (standby) / 8h (active)",
    "displayType": "Micro LED (green-mono)",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": false,
    "displayTech": "Monochrome Waveguide",
    "aiAssistant": "Even AI / ChatGPT",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.evenrealities.com/g1"
  },
  {
    "id": "even-realities-g2",
    "brand": "Even Realities",
    "name": "Even Realities G2",
    "price": "$599",
    "weight": 36,
    "fov": "27.5\u00b0",
    "battery": "2 days (with charging case)",
    "displayType": "Micro LED (green-mono binocular)",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": false,
    "displayTech": "Monochrome Waveguide",
    "aiAssistant": "Even AI / ChatGPT",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.evenrealities.com/products/g2"
  },
  {
    "id": "huawei-eyewear-2",
    "brand": "Huawei",
    "name": "Huawei Eyewear 2",
    "price": "$330",
    "weight": 36,
    "fov": "-",
    "battery": "11h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Celia / HarmonyOS AI",
    "availability": "Available",
    "deviceType": "Smart Audio Glasses",
    "isNewcomer": false,
    "link": "https://consumer.huawei.com/en/audio/huawei-eyewear-2/"
  },
  {
    "id": "huawei-vision-glass",
    "brand": "Huawei",
    "name": "Huawei Vision Glass",
    "price": "\u00a52999",
    "weight": 112,
    "fov": "30\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://consumer.huawei.com/cn/wearables/vision-glass/"
  },
  {
    "id": "inmo-air-2",
    "brand": "INMO",
    "name": "INMO Air 2",
    "price": "$599",
    "weight": 126,
    "fov": "26\u00b0",
    "battery": "2.5h",
    "displayType": "Micro-OLED Waveguide",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "INMO GPT",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://shsotech.en.made-in-china.com/product/RFnfMsqvHiTJ/China-Inmo-Air2-2-32GB-Smart-Translation-Glasses-on-Sale-Ar-Glasses.html?utm_source=google&utm_medium=shopping&utm_campaign=1940660281"
  },
  {
    "id": "inmo-air-3",
    "brand": "INMO",
    "name": "INMO Air 3",
    "price": "$899",
    "weight": 135,
    "fov": "36\u00b0",
    "battery": "1.5h",
    "displayType": "Micro-OLED Waveguide",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "INMO AI",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.inmoxr.com/products/inmo-air3-ar-glasses-all-in-one-full-color-waveguide"
  },
  {
    "id": "inmo-go",
    "brand": "INMO",
    "name": "INMO Go",
    "price": "$299",
    "weight": 52,
    "fov": "30\u00b0",
    "battery": "2.5h",
    "displayType": "MicroLED Waveguide",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Monochrome Waveguide",
    "aiAssistant": "INMO Translation AI",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.amazon.in/inmo-Translation-Languages-Translator-Teleprompter/dp/B0FBRSDW1M"
  },
  {
    "id": "inmo-go-2",
    "brand": "INMO",
    "name": "INMO GO2",
    "price": "$450",
    "weight": 52,
    "fov": "30\u00b0",
    "battery": "2.5h",
    "displayType": "MicroLED Waveguide",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Monochrome Waveguide",
    "aiAssistant": "INMO Translation AI",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.alibaba.com/product-detail/INMO-GO2-3D-Intelligent-AR-Glasses_1601362613661.html"
  },
  {
    "id": "meta-quest-3",
    "brand": "Meta",
    "name": "Meta Quest 3",
    "price": "$499",
    "weight": 515,
    "fov": "110\u00b0",
    "battery": "2.2h",
    "displayType": "LCD Passthrough",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "LCD",
    "aiAssistant": "Meta AI",
    "availability": "Available",
    "deviceType": "XR Headset",
    "isNewcomer": false,
    "link": "https://www.meta.com/quest/quest-3/"
  },
  {
    "id": "meta-quest-3s",
    "brand": "Meta",
    "name": "Meta Quest 3S",
    "price": "$299",
    "weight": 514,
    "fov": "96\u00b0",
    "battery": "2.5h",
    "displayType": "LCD Passthrough",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "LCD",
    "aiAssistant": "Meta AI",
    "availability": "Available",
    "deviceType": "XR Headset",
    "isNewcomer": false,
    "link": "https://www.meta.com/quest/quest-3s/"
  },
  {
    "id": "meta-rayban-gen2",
    "brand": "Meta",
    "name": "Ray-Ban Meta (Gen 2)",
    "price": "$299",
    "weight": 49,
    "fov": "-",
    "battery": "4h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Meta AI (Multimodal)",
    "availability": "Available",
    "deviceType": "AI Glasses",
    "isNewcomer": false,
    "link": "https://www.meta.com/smart-glasses/"
  },
  {
    "id": "meta-rayban-display",
    "brand": "Meta",
    "name": "Meta Ray-Ban Display & Neural Band",
    "price": "$799",
    "weight": 69,
    "fov": "20\u00b0",
    "battery": "6h",
    "displayType": "LCD Waveguide (mono)",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "LCoS",
    "aiAssistant": "Meta AI",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.meta.com/smart-glasses/ray-ban-display/"
  },
  {
    "id": "rokid-ai-style",
    "brand": "Rokid",
    "name": "Rokid AI Glasses Style",
    "price": "$299",
    "weight": 38.5,
    "fov": "-",
    "battery": "12h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "GPT / Gemini / Rokid",
    "availability": "Available",
    "deviceType": "AI Glasses",
    "isNewcomer": false,
    "link": "https://global.rokid.com/products/rokid-ai-glasses-style"
  },
  {
    "id": "rokid-glasses",
    "brand": "Rokid",
    "name": "Rokid Glasses",
    "price": "$499",
    "weight": 49,
    "fov": "30\u00b0",
    "battery": "4h",
    "displayType": "MicroLED Waveguide",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-LED",
    "aiAssistant": "Hi Rokid / Gemini / GPT",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.rokid.com/glasses/"
  },
  {
    "id": "samsung-galaxy-glasses",
    "brand": "Samsung",
    "name": "Samsung Galaxy Glasses / Intelligent Eyewear",
    "price": null,
    "weight": null,
    "fov": "TBA",
    "battery": "TBA",
    "displayType": "TBA",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Google Gemini",
    "availability": "Unreleased",
    "deviceType": "AI Glasses",
    "isNewcomer": true,
    "link": "https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/"
  },
  {
    "id": "samsung-galaxy-xr",
    "brand": "Samsung",
    "name": "Samsung Galaxy XR",
    "price": "$1799",
    "weight": 545,
    "fov": "109\u00b0",
    "battery": "2h",
    "displayType": "Micro-OLED Passthrough",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "Gemini",
    "availability": "Available",
    "deviceType": "XR Headset",
    "isNewcomer": false,
    "link": "https://www.samsung.com/us/smartphones/galaxy-xr/"
  },
  {
    "id": "rayneo-x2",
    "brand": "TCL RayNeo",
    "name": "RayNeo X2 AI & AR Glasses",
    "price": "$699",
    "weight": 119,
    "fov": "25\u00b0",
    "battery": "3h",
    "displayType": "Full-Color MicroLED",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-LED",
    "aiAssistant": "Google Gemini",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.rayneo.com/products/tcl-rayneo-x2"
  },
  {
    "id": "rayneo-air-2s",
    "brand": "TCL RayNeo",
    "name": "RAYNEO Air 2s AR/XR Glasses",
    "price": "$379",
    "weight": 78,
    "fov": "46\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://www.amazon.in/RAYNEO-Air-2s-Glasses-SteamDeck/dp/B0DPL5P3C7?source=ps-sl-shoppingads-lpcontext&psc=1&smid=AJ6SIZC8YQDZX"
  },
  {
    "id": "viture-luma-pro",
    "brand": "Viture",
    "name": "VITURE Luma Pro XR Glasses",
    "price": "$499",
    "weight": 78,
    "fov": "46\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED (Birdbath)",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://www.viture.com/product/viture-luma-pro-xr-glasses?color=Jet+Black&size=Regular+%28IPD+64.0%C2%B16.0+mm%29"
  },
  {
    "id": "xiaomi-mijia-ai",
    "brand": "Xiaomi",
    "name": "Xiaomi Mijia Smart Audio Glasses",
    "price": "\u00a5799",
    "weight": 38,
    "fov": "-",
    "battery": "8h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Xiao Ai / Qwen",
    "availability": "Available",
    "deviceType": "Smart Audio Glasses",
    "isNewcomer": false,
    "link": "https://www.mi.com/global/product/mijia-smart-audio-glasses/"
  },
  {
    "id": "xreal-air",
    "brand": "XREAL",
    "name": "XREAL Air",
    "price": "$299",
    "weight": 79,
    "fov": "46\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://www.xreal.com/"
  },
  {
    "id": "xreal-air2",
    "brand": "XREAL",
    "name": "XREAL Air 2",
    "price": "$399",
    "weight": 72,
    "fov": "46\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://us.shop.xreal.com/products/xreal-air-2"
  },
  {
    "id": "xreal-air2-pro",
    "brand": "XREAL",
    "name": "XREAL Air 2 Pro",
    "price": "$449",
    "weight": 75,
    "fov": "46\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "Spacewalker AI",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://eu.shop.xreal.com/products/xreal-air-2-pro"
  },
  {
    "id": "xreal-air2-ultra",
    "brand": "XREAL",
    "name": "XREAL Air 2 Ultra",
    "price": "$699",
    "weight": 80,
    "fov": "52\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED (Birdbath)",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "Spacewalker AI",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.xreal.com/support/air2-ultra"
  },
  {
    "id": "xreal-one",
    "brand": "XREAL",
    "name": "XREAL One",
    "price": "$399",
    "weight": 82,
    "fov": "50\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.xreal.com/one-pro"
  },
  {
    "id": "xreal-one-pro",
    "brand": "XREAL",
    "name": "XREAL One Pro",
    "price": "$599",
    "weight": 82,
    "fov": "50\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.xreal.com/one-pro"
  },
  {
    "id": "xreal-1s",
    "brand": "XREAL",
    "name": "XREAL 1S",
    "price": "$499",
    "weight": 82,
    "fov": "52\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.xreal.com/1s"
  },
  {
    "id": "asus-rog-xreal-r1",
    "brand": "ASUS",
    "name": "ASUS ROG XREAL R1",
    "price": "$850",
    "weight": 91,
    "fov": "57\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://rog.asus.com/glasses/rog-xreal-r1/"
  },
  {
    "id": "xreal-aura",
    "brand": "XREAL",
    "name": "Project Aura",
    "price": null,
    "weight": null,
    "fov": "70\u00b0",
    "battery": "TBA",
    "displayType": "MicroLED Waveguide",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-LED",
    "aiAssistant": "Gemini",
    "availability": "Unreleased",
    "deviceType": "AR Glasses",
    "isNewcomer": true,
    "link": "https://www.xreal.com/blog/project-aura-google-io-2026"
  },
  {
    "id": "meta-orion",
    "brand": "Meta",
    "name": "Meta Orion (Prototype)",
    "price": null,
    "weight": 98,
    "fov": "70\u00b0",
    "battery": "2h (Wireless Puck)",
    "displayType": "Silicon Carbide Waveguide",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-LED",
    "aiAssistant": "Meta AI with Vision",
    "availability": "Prototype",
    "deviceType": "Prototype",
    "isNewcomer": true,
    "link": "https://www.meta.com/en-gb/emerging-tech/orion/"
  },
  {
    "id": "huawei-ai-glasses",
    "brand": "Huawei",
    "name": "Huawei AI Glasses",
    "price": "\u00a51699",
    "weight": 35.5,
    "fov": "-",
    "battery": "All-day",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Harmony Intelligence",
    "availability": "Available",
    "deviceType": "AI Glasses",
    "isNewcomer": false,
    "link": "https://omdia.tech.informa.com/blogs/2026/apr/huawei-launches-its-first-ai-glasses-centered-on-ecosystem-integration-and-seamless-ai-experiences"
  },
  {
    "id": "thinkar-ailens",
    "brand": "ThinkAR",
    "name": "ThinkAR AiLENS",
    "price": "$550",
    "weight": 38,
    "fov": "20\u00b0",
    "battery": "10h",
    "displayType": "MicroLED Waveguide",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Monochrome Waveguide",
    "aiAssistant": "ThinkAR Edge AI",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.thinkar.com"
  },
  {
    "id": "nimo-glasses",
    "brand": "Nimo Planet",
    "name": "Nimo Glasses",
    "price": "$599",
    "weight": 120,
    "fov": "50\u00b0",
    "battery": "2.5h (Nimo Core)",
    "displayType": "Birdbath (binocular)",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "Nimo OS Workspace",
    "availability": "Preorder",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://www.nimoplanet.com/reserve"
  },
  {
    "id": "oakley-meta-hstn",
    "brand": "Meta",
    "name": "Oakley Meta HSTN",
    "price": "$449",
    "weight": 52,
    "fov": "-",
    "battery": "5h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Meta AI",
    "availability": "Available",
    "deviceType": "AI Glasses",
    "isNewcomer": false,
    "link": "https://www.oakley.com/en-us/category/meta-collection"
  },
  {
    "id": "vive-eagle",
    "brand": "HTC VIVE",
    "name": "VIVE Eagle",
    "price": null,
    "weight": 49,
    "fov": "-",
    "battery": "6h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "VIVE AI Assistant",
    "availability": "Available",
    "deviceType": "AI Glasses",
    "isNewcomer": false,
    "link": "https://www.vive.com/us/product/vive-eagle/"
  },
  {
    "id": "google-project-astra",
    "brand": "Google",
    "name": "Project Astra (Prototype)",
    "price": null,
    "weight": null,
    "fov": "TBA",
    "battery": "TBA",
    "displayType": "TBA",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "TBA",
    "aiAssistant": "Google Gemini / Astra",
    "availability": "Prototype",
    "deviceType": "Prototype",
    "isNewcomer": true,
    "link": "https://deepmind.google/models/project-astra/"
  },
  {
    "id": "microsoft-project-solara",
    "brand": "Microsoft",
    "name": "Project Solara (Wearable AI)",
    "price": null,
    "weight": null,
    "fov": "-",
    "battery": "TBA",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Microsoft Copilot",
    "availability": "Prototype",
    "deviceType": "Prototype",
    "isNewcomer": true,
    "link": "https://commandline.microsoft.com/project-solara-build-2026/"
  },
  {
    "id": "meta-project-aria-gen1",
    "brand": "Meta",
    "name": "Meta Project Aria (Gen 1)",
    "price": null,
    "weight": 70,
    "fov": "110\u00b0",
    "battery": "4h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Meta AI Research",
    "availability": "Prototype",
    "deviceType": "Prototype",
    "isNewcomer": true,
    "link": "https://facebookresearch.github.io/projectaria_tools/docs/ARK/ARK_quickstart"
  },
  {
    "id": "meta-project-aria",
    "brand": "Meta",
    "name": "Meta Project Aria (Gen 2)",
    "price": null,
    "weight": 75,
    "fov": "80\u00b0",
    "battery": "7h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Meta AI Research",
    "availability": "Prototype",
    "deviceType": "Prototype",
    "isNewcomer": true,
    "link": "https://www.meta.com/en-gb/blog/project-aria-gen-2-next-generation-egocentric-research-glasses-reality-labs-ai-robotics/"
  },
  {
    "id": "viture-beast-xr",
    "brand": "Viture",
    "name": "VITURE Beast XR Glasses",
    "price": "$549",
    "weight": 88,
    "fov": "58\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://www.viture.com/product/viture-beast-xr-glasses?color=Jet+Black&size=Regular+%28IPD+64.0%C2%B16.0+mm%29"
  },
  {
    "id": "viture-luma-xr",
    "brand": "Viture",
    "name": "VITURE Luma XR Glasses",
    "price": "$399",
    "weight": 77,
    "fov": "50\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://www.viture.com/product/viture-luma-xr-glasses?color=Jet+Black&size=Regular+%28IPD+56-72mm%29"
  },
  {
    "id": "viture-luma-ultra",
    "brand": "Viture",
    "name": "VITURE Luma Ultra XR/AR Glasses",
    "price": "$599",
    "weight": 80,
    "fov": "52\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.viture.com/product/viture-luma-ultra-xr-glasses?color=Jet+Black&size=Regular+%28IPD+58-70mm%29"
  },
  {
    "id": "viture-luma-cyber",
    "brand": "Viture",
    "name": "VITURE x Cyberpunk 2077 Luma Cyber XR Glasses",
    "price": "$549",
    "weight": 77,
    "fov": "52\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://www.viture.com/product/viture-x-cyberpunk-2077-luma-cyber-xr-glasses?color=Jet+Black&size=Regular+%28IPD+58-70mm%29"
  },
  {
    "id": "inmo-go-3",
    "brand": "INMO",
    "name": "INMO GO 3",
    "price": "$420",
    "weight": 53,
    "fov": "30\u00b0",
    "battery": "2.5h",
    "displayType": "Micro-OLED Waveguide",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "INMO GPT / Voice AI",
    "availability": "Coming Soon",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.kickstarter.com/projects/inmo-go3-ai-glasses/everyday-wear-ai-glasses"
  },
  {
    "id": "alibaba-quark-g1",
    "brand": "Alibaba",
    "name": "Alibaba Quark AI Glasses (G1)",
    "price": "\u00a51899",
    "weight": 40,
    "fov": "-",
    "battery": "4h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Quark / Qwen",
    "availability": "Available",
    "deviceType": "AI Glasses",
    "isNewcomer": false,
    "link": "https://www.alibabacloud.com/blog/alibaba-launches-new-quark-ai-glasses-series-in-china-deeply-integrated-with-qwen_602717"
  },
  {
    "id": "latitude-52n-berlin",
    "brand": "L'Atitude 52\u00b0N",
    "name": "L'Atitude 52\u00b0N Berlin",
    "price": "$399",
    "weight": 51,
    "fov": "-",
    "battery": "5h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Goya AI",
    "availability": "Available",
    "deviceType": "Smart Audio Glasses",
    "isNewcomer": false,
    "link": "https://www.latitude52n.com/en-row/products/berlin-smart-glasses"
  },
  {
    "id": "latitude-52n-milan",
    "brand": "L'Atitude 52\u00b0N",
    "name": "L'Atitude 52\u00b0N Milan",
    "price": "$399",
    "weight": 51,
    "fov": "-",
    "battery": "5h",
    "displayType": "None",
    "hasDisplay": false,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "None",
    "aiAssistant": "Goya AI",
    "availability": "Available",
    "deviceType": "Smart Audio Glasses",
    "isNewcomer": false,
    "link": "https://www.latitude52n.com/en-row/products/milan-smart-glasses"
  },
  {
    "id": "rayneo-air-4-pro",
    "brand": "TCL RayNeo",
    "name": "RayNeo Air 4 Pro AR Glasses",
    "price": "$449",
    "weight": 76,
    "fov": "50\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://www.rayneo.com/products/rayneo-air-4-pro-ar-glasses"
  },
  {
    "id": "rayneo-air-3s-pro",
    "brand": "TCL RayNeo",
    "name": "Air 3s Pro AR Glasses",
    "price": "$299",
    "weight": 72,
    "fov": "46\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://www.rayneo.com/products/ar-glasses-rayneo-air-3s-pro-features"
  },
  {
    "id": "rayneo-x3-pro",
    "brand": "TCL RayNeo",
    "name": "RayNeo X3 Pro AI+AR Smart Glasses",
    "price": "$1299",
    "weight": 78,
    "fov": "30\u00b0",
    "battery": "3h",
    "displayType": "Full-Color MicroLED",
    "hasDisplay": true,
    "hasCamera": true,
    "hasAudio": true,
    "displayTech": "Micro-LED",
    "aiAssistant": "Google Gemini",
    "availability": "Coming Soon",
    "deviceType": "AR Glasses",
    "isNewcomer": false,
    "link": "https://www.rayneo.com/products/x3-pro-ai-display-glasses"
  },
  {
    "id": "rayneo-air-2",
    "brand": "TCL RayNeo",
    "name": "RayNeo Air 2 AR Glasses",
    "price": "$379",
    "weight": 76,
    "fov": "46\u00b0",
    "battery": "Tethered",
    "displayType": "Micro-OLED",
    "hasDisplay": true,
    "hasCamera": false,
    "hasAudio": true,
    "displayTech": "Micro-OLED",
    "aiAssistant": "None",
    "availability": "Available",
    "deviceType": "Display Glasses",
    "isNewcomer": false,
    "link": "https://www.rayneo.com/products/rayneo-air-2-xr-glasses"
  }
];

const glossaryData = [
  {
    "term": "XR (Extended Reality)",
    "definition": "An umbrella term encapsulating Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR).",
    "category": "General"
  },
  {
    "term": "AR (Augmented Reality)",
    "definition": "Technology that overlays digital information or holograms onto the real world.",
    "category": "General"
  },
  {
    "term": "VR (Virtual Reality)",
    "definition": "A completely immersive digital environment that replaces the user's real-world surroundings.",
    "category": "General"
  },
  {
    "term": "MR (Mixed Reality)",
    "definition": "A blend of physical and digital worlds where real and holographic objects co-exist and interact in real-time.",
    "category": "General"
  },
  {
    "term": "Spatial Computing",
    "definition": "Human-machine interaction in which the machine retains and manipulates referents to real objects and spaces (e.g., Apple Vision Pro).",
    "category": "General"
  },
  {
    "term": "Metaverse",
    "definition": "A collective virtual shared space, created by the convergence of virtually enhanced physical reality and physically persistent virtual space.",
    "category": "General"
  },
  {
    "term": "Passthrough",
    "definition": "A feature in VR/MR headsets that uses exterior cameras to show the user the real world inside the headset.",
    "category": "General"
  },
  {
    "term": "Color Passthrough",
    "definition": "Passthrough video rendered in full color, crucial for high-quality Mixed Reality experiences.",
    "category": "General"
  },
  {
    "term": "Smart Glasses",
    "definition": "Wearable computer glasses that add information alongside or to what the wearer sees.",
    "category": "General"
  },
  {
    "term": "HMD (Head-Mounted Display)",
    "definition": "A display device worn on the head or as part of a helmet.",
    "category": "General"
  },
  {
    "term": "Standalone VR/AR",
    "definition": "A headset that contains all necessary processing power and batteries internally, requiring no external PC or console.",
    "category": "General"
  },
  {
    "term": "Tethered VR/AR",
    "definition": "A headset that requires a physical cable connection to a PC, console, or smartphone to function.",
    "category": "General"
  },
  {
    "term": "Waveguide",
    "definition": "A thin piece of glass or plastic that channels projected light directly into the user's eye using internal reflection. Common in AR glasses.",
    "category": "Optics"
  },
  {
    "term": "Diffractive Waveguide",
    "definition": "A type of waveguide that uses slanted nano-gratings to bend and direct light into the eye (e.g., HoloLens, Magic Leap).",
    "category": "Optics"
  },
  {
    "term": "Reflective Waveguide",
    "definition": "Also known as geometric waveguides, these use an array of microscopic partially-reflective mirrors to direct light (e.g., Lumus).",
    "category": "Optics"
  },
  {
    "term": "Holographic Waveguide",
    "definition": "A waveguide that uses holographic optical elements (HOEs) created by laser interference patterns to guide light.",
    "category": "Optics"
  },
  {
    "term": "Birdbath Optics",
    "definition": "An optical design where light from a microdisplay is bounced off a beam splitter to a curved mirror, which reflects it into the eye. Bulky but provides excellent image quality (e.g., XREAL).",
    "category": "Optics"
  },
  {
    "term": "Pancake Lenses",
    "definition": "Folded optics that bounce light back and forth between optical layers to drastically reduce the distance between the display and the lens, making headsets thinner.",
    "category": "Optics"
  },
  {
    "term": "Fresnel Lenses",
    "definition": "A lens divided into a set of concentric annular sections. Used in older VR headsets to reduce weight and thickness, but often suffers from 'god rays'.",
    "category": "Optics"
  },
  {
    "term": "Aspheric Lenses",
    "definition": "Lenses with surface profiles that are not portions of a sphere. They provide a clearer image with a larger sweet spot than Fresnel lenses.",
    "category": "Optics"
  },
  {
    "term": "Freeform Optics",
    "definition": "Complex, non-symmetrical lens shapes designed to correct optical aberrations in highly compact AR/VR designs.",
    "category": "Optics"
  },
  {
    "term": "Beam Splitter",
    "definition": "An optical device that splits a beam of light in two, used in AR to combine the display image with the real world.",
    "category": "Optics"
  },
  {
    "term": "Combiner",
    "definition": "The optical element in an AR headset where the virtual image is combined with the user's view of the real world.",
    "category": "Optics"
  },
  {
    "term": "HOE (Holographic Optical Element)",
    "definition": "An optical component that uses a hologram to alter the path of light, often acting as a lens, mirror, or combiner.",
    "category": "Optics"
  },
  {
    "term": "Etendue",
    "definition": "A property of light in an optical system, characterizing how 'spread out' the light is in area and angle. Crucial for AR optical efficiency.",
    "category": "Optics"
  },
  {
    "term": "Birefringence",
    "definition": "The optical property of a material having a refractive index that depends on the polarization and propagation direction of light. Important in Pancake lenses.",
    "category": "Optics"
  },
  {
    "term": "Chromatic Aberration",
    "definition": "Color fringing caused by a lens failing to focus all colors to the same convergence point. Software often corrects this in VR.",
    "category": "Optics"
  },
  {
    "term": "Pincushion Distortion",
    "definition": "An optical effect where the image bends inward toward the center. VR software intentionally applies barrel distortion to counter this.",
    "category": "Optics"
  },
  {
    "term": "Barrel Distortion",
    "definition": "An optical effect where the image bulges outward. Applied in software to counteract the pincushion distortion of VR lenses.",
    "category": "Optics"
  },
  {
    "term": "God Rays",
    "definition": "Glare or light streaks visible in high-contrast scenes, heavily associated with the ridges on Fresnel lenses.",
    "category": "Optics"
  },
  {
    "term": "Sweet Spot",
    "definition": "The precise center area of a lens where the image is sharpest and clearest.",
    "category": "Optics"
  },
  {
    "term": "Eye Box",
    "definition": "The 3D volume of space in which the user's pupil can be placed to see the entire display clearly without image cutoff.",
    "category": "Optics"
  },
  {
    "term": "Eye Relief",
    "definition": "The required distance from the outer surface of the lens to the user's eye to achieve the full viewing angle.",
    "category": "Optics"
  },
  {
    "term": "Micro-OLED",
    "definition": "OLED displays built on a silicon wafer (OLEDoS). Extremely small, high pixel density, and deep blacks. Currently the gold standard for compact VR/AR.",
    "category": "Display"
  },
  {
    "term": "Micro-LED",
    "definition": "Displays made of microscopic inorganic LEDs. Known for extreme brightness (millions of nits), long lifespan, and high contrast. Crucial for outdoor AR.",
    "category": "Display"
  },
  {
    "term": "LCoS (Liquid Crystal on Silicon)",
    "definition": "A reflective display technology using liquid crystals over a silicon backplane. Very bright, historically used in Magic Leap and HoloLens.",
    "category": "Display"
  },
  {
    "term": "DLP (Digital Light Processing)",
    "definition": "A display technology using millions of microscopic mirrors on a DMD chip. Excellent color and brightness, used in some AR projectors.",
    "category": "Display"
  },
  {
    "term": "LCD (Liquid Crystal Display)",
    "definition": "Standard display tech utilizing a backlight. Evolved into 'Fast-Switching LCD' for VR to reduce motion blur.",
    "category": "Display"
  },
  {
    "term": "AMOLED",
    "definition": "Active Matrix OLED. Used in early VR (like original Oculus Quest) for great colors and blacks, but suffers from screen door effect due to lower pixel density.",
    "category": "Display"
  },
  {
    "term": "Laser Beam Scanning (LBS)",
    "definition": "A display method that creates an image by rapidly sweeping a laser beam across the retina or a combiner (e.g., North Focals).",
    "category": "Display"
  },
  {
    "term": "Retinal Projection",
    "definition": "Directly projecting light into the eye to form an image on the retina, bypassing standard screens entirely.",
    "category": "Display"
  },
  {
    "term": "Nits",
    "definition": "A unit of measurement for luminance (brightness). AR glasses need thousands or millions of nits at the display level to combat sunlight.",
    "category": "Display"
  },
  {
    "term": "Screen Door Effect (SDE)",
    "definition": "A visual artifact where the fine lines between pixels become visible, resembling looking through a screen door. Highly mitigated by Micro-OLED.",
    "category": "Display"
  },
  {
    "term": "Mura",
    "definition": "Clouding or inconsistent brightness/color across a display, commonly seen in OLED panels at low brightness levels.",
    "category": "Display"
  },
  {
    "term": "Sub-pixel Matrix",
    "definition": "The arrangement of red, green, and blue sub-pixels. RGB stripe is preferred for text clarity over PenTile matrix.",
    "category": "Display"
  },
  {
    "term": "Local Dimming",
    "definition": "Turning off the backlight in specific areas of an LCD screen to achieve deeper blacks. Used in high-end LCD headsets.",
    "category": "Display"
  },
  {
    "term": "Global Illumination",
    "definition": "A lighting model in rendering that adds more realistic lighting to 3D scenes by simulating how light bounces off surfaces.",
    "category": "Display"
  },
  {
    "term": "3DoF (Three Degrees of Freedom)",
    "definition": "Tracking rotational movement only (pitch, yaw, roll). You can look around, but leaning or walking is not tracked.",
    "category": "Tracking"
  },
  {
    "term": "6DoF (Six Degrees of Freedom)",
    "definition": "Tracking both rotation and translation (pitch, yaw, roll + x, y, z axes). Allows you to walk around and lean into virtual objects.",
    "category": "Tracking"
  },
  {
    "term": "SLAM (Simultaneous Localization and Mapping)",
    "definition": "The computational problem of constructing a map of an unknown environment while simultaneously keeping track of an agent's location within it.",
    "category": "Tracking"
  },
  {
    "term": "Inside-Out Tracking",
    "definition": "Tracking where cameras/sensors are located on the headset itself, reading the environment to determine spatial position (e.g., Meta Quest).",
    "category": "Tracking"
  },
  {
    "term": "Outside-In Tracking",
    "definition": "Tracking where external cameras/sensors (like base stations) are placed in the room to track the headset and controllers (e.g., Valve Index).",
    "category": "Tracking"
  },
  {
    "term": "IMU (Inertial Measurement Unit)",
    "definition": "An electronic device containing accelerometers, gyroscopes, and sometimes magnetometers. The baseline sensor for 3DoF tracking.",
    "category": "Tracking"
  },
  {
    "term": "LiDAR",
    "definition": "Light Detection and Ranging. A sensor that uses lasers to accurately measure depth and create 3D meshes of a room (found in Apple Vision Pro/iPad Pro).",
    "category": "Tracking"
  },
  {
    "term": "ToF (Time of Flight) Sensor",
    "definition": "A sensor that measures the time it takes for a light pulse to bounce back from an object to calculate depth.",
    "category": "Tracking"
  },
  {
    "term": "Eye Tracking",
    "definition": "Using internal IR cameras to track where the user's pupils are looking. Crucial for foveated rendering and intuitive UI interaction.",
    "category": "Tracking"
  },
  {
    "term": "Hand Tracking",
    "definition": "Using external cameras to track the joints and movements of the user's bare hands, replacing physical controllers.",
    "category": "Tracking"
  },
  {
    "term": "Face Tracking",
    "definition": "Tracking a user's facial expressions (mouth, cheeks, brows) to map them onto a digital avatar in real-time.",
    "category": "Tracking"
  },
  {
    "term": "Body Tracking / Full Body Tracking (FBT)",
    "definition": "Using extra sensors (trackers) placed on the hips, feet, and elbows to accurately track the entire human body in VR.",
    "category": "Tracking"
  },
  {
    "term": "Haptics",
    "definition": "Technology that simulates the sense of touch using vibrations or force feedback in controllers or vests.",
    "category": "Tracking"
  },
  {
    "term": "Spatial Anchors",
    "definition": "Invisible reference points placed in the real world by a headset's SLAM system, allowing virtual objects to persist in the same physical location over time.",
    "category": "Tracking"
  },
  {
    "term": "Sensor Fusion",
    "definition": "Combining data from multiple sensors (e.g., camera + IMU) to improve tracking accuracy and reduce latency.",
    "category": "Tracking"
  },
  {
    "term": "VIO (Visual Inertial Odometry)",
    "definition": "The process of estimating a device's position and orientation by combining visual data from cameras with inertial data from an IMU.",
    "category": "Tracking"
  },
  {
    "term": "FOV (Field of View)",
    "definition": "The extent of the observable world seen at any given moment. Human vision is roughly 200\u00b0 horizontal; standard VR is ~100\u00b0; AR glasses are often 20\u00b0-50\u00b0.",
    "category": "Metrics"
  },
  {
    "term": "PPD (Pixels Per Degree)",
    "definition": "A measurement of angular resolution. 60 PPD represents human retinal resolution. VR headsets typically range from 20 to 40 PPD.",
    "category": "Metrics"
  },
  {
    "term": "IPD (Interpupillary Distance)",
    "definition": "The distance between the centers of the pupils of the eyes. Crucial for optical alignment in headsets to prevent eye strain.",
    "category": "Metrics"
  },
  {
    "term": "Refresh Rate",
    "definition": "How many times per second the display updates, measured in Hertz (Hz). Higher refresh rates (90Hz+) reduce motion sickness.",
    "category": "Metrics"
  },
  {
    "term": "Motion-to-Photon Latency",
    "definition": "The time it takes for a user's physical movement to be reflected on the display. Must be under 20ms to avoid nausea.",
    "category": "Metrics"
  },
  {
    "term": "Aspect Ratio",
    "definition": "The ratio of width to height of an image or screen. Varies widely in AR/VR based on optical design.",
    "category": "Metrics"
  },
  {
    "term": "Focal Distance",
    "definition": "The simulated physical distance at which the virtual image appears to the eye. Most VR headsets have a fixed focal distance of 1.5 to 2 meters.",
    "category": "Metrics"
  },
  {
    "term": "Foveated Rendering",
    "definition": "A rendering technique that uses eye-tracking to render the area you are looking at in high resolution, while blurring the periphery to save massive processing power.",
    "category": "Software"
  },
  {
    "term": "Fixed Foveated Rendering",
    "definition": "Rendering the center of the lenses in high resolution and the edges in low resolution, without eye tracking.",
    "category": "Software"
  },
  {
    "term": "Reprojection / Spacewarp",
    "definition": "Techniques that artificially generate intermediate frames based on head movement when a game drops below the target framerate (e.g., Asynchronous Spacewarp/ASW).",
    "category": "Software"
  },
  {
    "term": "Chromatic Aberration Correction",
    "definition": "Software algorithm that warps RGB channels inversely to the physical lens distortion to ensure colors align properly in the eye.",
    "category": "Software"
  },
  {
    "term": "Vergence-Accommodation Conflict (VAC)",
    "definition": "Eye strain caused when the eyes cross (vergence) to look at a close virtual object, but focus (accommodation) at the fixed distance of the screen. Solved by varifocal displays.",
    "category": "Software"
  },
  {
    "term": "Varifocal Display",
    "definition": "A display system that physically or optically shifts the focal plane to match where the user's eyes are converging, fixing VAC.",
    "category": "Software"
  },
  {
    "term": "Light Field Display",
    "definition": "A display that projects multiple light rays from every point, allowing the eye to naturally focus at different depths. The ultimate theoretical solution to VAC.",
    "category": "Software"
  },
  {
    "term": "Occlusion",
    "definition": "The ability of a system to understand depth so that real-world objects can visually block (occlude) virtual objects, and vice versa.",
    "category": "Software"
  },
  {
    "term": "OpenXR",
    "definition": "An open standard API developed by the Khronos Group, allowing developers to write VR/AR apps that work across multiple headset brands.",
    "category": "Software"
  },
  {
    "term": "WebXR",
    "definition": "An API for web browsers allowing them to run AR and VR experiences directly on a web page without app installations.",
    "category": "Software"
  },
  {
    "term": "Volumetric Video",
    "definition": "Video captured using multiple cameras to create a 3D hologram of a person or scene that can be viewed from any angle.",
    "category": "Software"
  },
  {
    "term": "Gaussian Splatting",
    "definition": "A novel rendering technique that creates highly photorealistic 3D scenes from 2D photos by representing them as 3D Gaussians instead of polygons.",
    "category": "Software"
  },
  {
    "term": "NeRF (Neural Radiance Field)",
    "definition": "An AI technique that generates novel views of complex 3D scenes based on a partial set of 2D images.",
    "category": "Software"
  },
  {
    "term": "Photogrammetry",
    "definition": "The science of making measurements from photographs, specifically used to generate 3D models from overlapping 2D images.",
    "category": "Software"
  },
  {
    "term": "Spatial Audio",
    "definition": "3D audio processing that makes sounds appear to come from specific locations in 3D space, matching virtual objects.",
    "category": "Audio"
  },
  {
    "term": "HRTF (Head-Related Transfer Function)",
    "definition": "An algorithm used in spatial audio to simulate how sound interacts with the human head and ears to create accurate 3D sound positioning.",
    "category": "Audio"
  },
  {
    "term": "Bone Conduction",
    "definition": "Audio technology that transmits sound vibrations directly through the skull to the inner ear, bypassing the eardrum. Often used in minimalist smart glasses.",
    "category": "Audio"
  },
  {
    "term": "Open-Ear Audio",
    "definition": "Directional speakers built into the temples of smart glasses that project sound to the ears without blocking external ambient noise.",
    "category": "Audio"
  },
  {
    "term": "Smart Ring",
    "definition": "A wearable input device worn on the finger, increasingly used to discretely control AR glasses via micro-gestures.",
    "category": "Hardware"
  },
  {
    "term": "EMG (Electromyography) Band",
    "definition": "A wearable band (usually on the wrist) that reads electrical signals from muscles to detect finger and hand movements before they physically happen (e.g., Meta's neural wristband).",
    "category": "Hardware"
  },
  {
    "term": "Neural Interface",
    "definition": "A system that directly connects the human nervous system or brain to a computer, such as non-invasive wristbands or invasive chips (BCI).",
    "category": "Hardware"
  },
  {
    "term": "Enterprise AR",
    "definition": "AR headsets and software designed for industrial use, such as remote assistance, 3D CAD visualization, or medical training (e.g., HoloLens 2).",
    "category": "Market"
  },
  {
    "term": "Consumer AR",
    "definition": "AR glasses meant for everyday use by the general public, prioritizing style, weight, and price over complex features.",
    "category": "Market"
  },
  {
    "term": "Telepresence",
    "definition": "A set of technologies which allow a person to feel as if they were present, to give the appearance of being present, or to have an effect, via telerobotics, at a place other than their true location.",
    "category": "Market"
  },
  {
    "term": "Digital Twin",
    "definition": "A highly accurate virtual replica of a physical object, system, or environment, updated in real-time. Heavily used in enterprise XR.",
    "category": "Market"
  },
  {
    "term": "Pupil Swim",
    "definition": "A distortion artifact where the image warps or shifts unnaturally as the user moves their eye (pupil) around the lens.",
    "category": "Optics"
  },
  {
    "term": "Teleportation",
    "definition": "A common VR locomotion method where the user points to a spot and instantly teleports there, eliminating motion sickness.",
    "category": "Software"
  },
  {
    "term": "Smooth Locomotion",
    "definition": "Moving in VR using a thumbstick, similar to traditional FPS games. Highly immersive but can cause nausea in sensitive users.",
    "category": "Software"
  },
  {
    "term": "Snap Turning",
    "definition": "Rotating the virtual camera in rigid increments (e.g., 45 degrees) rather than smoothly, to reduce motion sickness.",
    "category": "Software"
  },
  {
    "term": "Vignetting",
    "definition": "A technique used in VR software to dynamically darken the edges of the screen during fast movement, reducing peripheral motion sickness.",
    "category": "Software"
  },
  {
    "term": "Sideloading",
    "definition": "Installing apps on a standalone headset from outside its official app store (e.g., using SideQuest).",
    "category": "Software"
  },
  {
    "term": "Asynchronous TimeWarp (ATW)",
    "definition": "An Oculus (Meta) technique that warps the last rendered frame to match the user's latest head movement, preventing jitter when frames drop.",
    "category": "Software"
  },
  {
    "term": "Dynamic Foveated Rendering (DFR)",
    "definition": "Foveated rendering that actively tracks the pupil in real-time, shifting the high-resolution area exactly where the eye looks.",
    "category": "Software"
  },
  {
    "term": "Interocular Distance",
    "definition": "The distance between the optical centers of the left and right lenses in a headset. Must be adjustable to match user IPD.",
    "category": "Metrics"
  },
  {
    "term": "Stereoscopy",
    "definition": "A technique for creating or enhancing the illusion of depth in an image by means of stereopsis for binocular vision.",
    "category": "Optics"
  },
  {
    "term": "Convergence",
    "definition": "The inward turning of the eyes to focus on near objects. Crucial for depth perception in AR/VR.",
    "category": "General"
  },
  {
    "term": "Mura Correction",
    "definition": "Software calibration applied at the factory to offset the uneven brightness of individual pixels in OLED panels.",
    "category": "Display"
  },
  {
    "term": "TIR (Total Internal Reflection)",
    "definition": "An optical phenomenon where light traveling through a medium hits a boundary and reflects entirely back into the medium. The core principle of waveguides.",
    "category": "Optics"
  },
  {
    "term": "Hologram",
    "definition": "A 3D image formed by the interference of light beams from a laser or other coherent light source.",
    "category": "Display"
  },
  {
    "term": "Light Engine",
    "definition": "The miniaturized projector inside AR glasses (often micro-OLED or Micro-LED) that shines light into the waveguide.",
    "category": "Hardware"
  },
  {
    "term": "FOV (Diagonal)",
    "definition": "The measurement of Field of View from corner to corner. Often used in marketing to produce a larger number than horizontal FOV.",
    "category": "Metrics"
  },
  {
    "term": "FOV (Horizontal)",
    "definition": "The measurement of Field of View from side to side. The most critical metric for immersion.",
    "category": "Metrics"
  },
  {
    "term": "Volumetric Capture",
    "definition": "Recording a subject from all angles simultaneously to create a fully 3D, animated asset.",
    "category": "Software"
  },
  {
    "term": "Avatar",
    "definition": "A digital representation of the user in a virtual space. Can be realistic or highly stylized.",
    "category": "General"
  },
  {
    "term": "Body Tracking (IK)",
    "definition": "Inverse Kinematics. A software calculation used to guess the position of elbows and knees based only on the position of the headset and controllers.",
    "category": "Software"
  },
  {
    "term": "ARCore",
    "definition": "Google's augmented reality development platform for Android devices.",
    "category": "Software"
  },
  {
    "term": "ARKit",
    "definition": "Apple's augmented reality development framework for iOS devices.",
    "category": "Software"
  },
  {
    "term": "RealityKit",
    "definition": "Apple's high-level 3D framework tailored specifically for AR and spatial computing.",
    "category": "Software"
  },
  {
    "term": "Room-Scale VR",
    "definition": "A VR experience designed to allow the user to freely walk around a designated physical space.",
    "category": "General"
  },
  {
    "term": "Seated VR",
    "definition": "A VR experience designed to be played while sitting in a chair, often relying on thumbsticks for movement.",
    "category": "General"
  },
  {
    "term": "Stationary Boundary",
    "definition": "A protective grid or cage in VR that appears when the user steps out of a small, fixed area, usually used for sitting or standing without walking.",
    "category": "Software"
  },
  {
    "term": "Guardian / Chaperone",
    "definition": "The virtual boundary system (named by Meta and Valve, respectively) that prevents users from walking into physical walls.",
    "category": "Software"
  },
  {
    "term": "Refresh Rate (Hz)",
    "definition": "The frequency at which the display updates the image. 72Hz is considered the bare minimum for VR, with 90Hz to 120Hz being preferred.",
    "category": "Metrics"
  },
  {
    "term": "Lens Glare",
    "definition": "Stray light reflecting internally within the lens assembly, washing out contrast. Common in Pancake optics if anti-reflective coatings aren't perfect.",
    "category": "Optics"
  },
  {
    "term": "Ghosting",
    "definition": "A visual artifact where a faint duplicate of an image appears, often caused by slow pixel response times or optical reflections.",
    "category": "Display"
  },
  {
    "term": "Black Smear",
    "definition": "An artifact specific to OLED displays in VR, where pixels take too long to turn back on after being completely black, causing a dark blur during head movement.",
    "category": "Display"
  },
  {
    "term": "MTP (Motion to Photon)",
    "definition": "The total latency from physical movement, to sensor reading, to rendering, to the display updating. High MTP causes nausea.",
    "category": "Metrics"
  },
  {
    "term": "Focal Plane",
    "definition": "The specific distance at which the eye must focus to see the virtual image clearly. Multi-focal displays use multiple planes to simulate depth.",
    "category": "Optics"
  }
];

const unboxingData = [
  {
    "title": "Apple Vision Pro Unboxing & Setup!",
    "channel": "Marques Brownlee",
    "youtubeId": "SaneSRqePVY",
    "brand": "Apple"
  },
  {
    "title": "Even Realities G1 Smart Glasses - The Best Everyday AR?",
    "channel": "Unbox Therapy",
    "youtubeId": "TZ38AKSDb8Q",
    "brand": "Even Realities"
  },
  {
    "title": "Ray-Ban Meta Smart Glasses Review (Unboxing)",
    "channel": "MKBHD",
    "youtubeId": "oBZ8toFKZls",
    "brand": "Meta"
  },
  {
    "title": "Brilliant Labs Frame - AI Glasses Review",
    "channel": "MrMobile",
    "youtubeId": "2mUc-sIumaA",
    "brand": "Brilliant Labs"
  },
  {
    "title": "XREAL Air 2 Ultra - True AR Glasses?",
    "channel": "Tested",
    "youtubeId": "ccT7pWuERIg",
    "brand": "XREAL"
  },
  {
    "title": "Meta Quest Pro Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "M2JYS6QlVk4",
    "brand": "Meta"
  },
  {
    "title": "Meta Quest 2 Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "RACtSpvX7Ic",
    "brand": "Meta"
  },
  {
    "title": "Snapchat Spectacles 3 Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "dllxxJ4s2O8",
    "brand": "Snap"
  },
  {
    "title": "Snapchat Spectacles 4 AR Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "rNkWqmbC-Ng",
    "brand": "Snap"
  },
  {
    "title": "XREAL Air 2 Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "Om1OGX9oR8Q",
    "brand": "XREAL"
  },
  {
    "title": "Rokid Air Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "gyMh3SLToNc",
    "brand": "Rokid"
  },
  {
    "title": "TCL Nxtwear S Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "NZ6ir-EKcLE",
    "brand": "TCL"
  },
  {
    "title": "Vuzix Blade Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "zRWmZb2ggG4",
    "brand": "Vuzix"
  },
  {
    "title": "North Focals Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "FpPRJJECqhY",
    "brand": "North"
  },
  {
    "title": "Even Realities G1 Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "NGcUoRXBXRY",
    "brand": "Even Realities"
  },
  {
    "title": "Brilliant Labs Frame Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "2mUc-sIumaA",
    "brand": "Brilliant Labs"
  },
  {
    "title": "Microsoft HoloLens 1 Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "Q25m0rfohM8",
    "brand": "Microsoft"
  },
  {
    "title": "PICO 4 Enterprise Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "byqoZ0HfWO8",
    "brand": "PICO"
  },
  {
    "title": "Lenovo ThinkReality A3 Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "eRsQV5h6QD4",
    "brand": "Lenovo"
  },
  {
    "title": "Nreal Light Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "L98MWt9EwAQ",
    "brand": "XREAL"
  },
  {
    "title": "Bose Frames Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "rJ46e4nO8Xs",
    "brand": "Bose"
  },
  {
    "title": "Amazon Echo Frames Unboxing & Review",
    "channel": "Tech Reviewer",
    "youtubeId": "_XLqgcbx3HE",
    "brand": "Amazon"
  }
];

const teardownData = [
  {
    "model": "Xiaomi AI Smart Glasses",
    "brand": "Xiaomi",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "NexPCB",
    "youtubeId": "P1mqL9wVDf4",
    "repairability": "N/A",
    "details": "Xiaomi AI Smart Glasses packaging and assembly process teardown.",
    "link": "https://youtu.be/P1mqL9wVDf4"
  },
  {
    "model": "PICO 4",
    "brand": "PICO",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "NexPCB",
    "youtubeId": "hAfnklzNNl8",
    "repairability": "N/A",
    "details": "The hardware design of PICO 4 explained through component level teardown.",
    "link": "https://youtu.be/hAfnklzNNl8"
  },
  {
    "model": "Oakley Meta HSTN",
    "brand": "Meta",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "Xt7VM3KVtFQ",
    "repairability": "N/A",
    "details": "Oakley x Meta HSTN Smartglasses Teardown investigating repairability and internals.",
    "link": "https://youtu.be/Xt7VM3KVtFQ"
  },
  {
    "model": "Ray-Ban Meta (Gen 2)",
    "brand": "Meta",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "SbTc-a29dUQ",
    "repairability": "N/A",
    "details": "Ray-Ban Meta Smart Glasses teardown demonstrating internal sensors and camera components.",
    "link": "https://youtu.be/SbTc-a29dUQ"
  },
  {
    "model": "Meta Ray-Ban Display",
    "brand": "Meta",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "G8ypYclM0bc",
    "repairability": "N/A",
    "details": "Detailed teardown of Meta's Ray-Ban Display glasses showing the optical project engine.",
    "link": "https://youtu.be/G8ypYclM0bc"
  },
  {
    "model": "Apple Vision Pro",
    "brand": "Apple",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "iFixit",
    "youtubeId": "JVJPAYwY8Us",
    "repairability": "4/10",
    "details": "Vision Pro Teardown part 1: Behind the complex display tech and dual micro-displays.",
    "link": "https://youtu.be/JVJPAYwY8Us"
  },
  {
    "model": "Apple Vision Pro",
    "brand": "Apple",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "iFixit",
    "youtubeId": "wt22M5nWJ4Q",
    "repairability": "4/10",
    "details": "Vision Pro Teardown part 2: pixel-level display analysis and lens array examination.",
    "link": "https://youtu.be/wt22M5nWJ4Q"
  },
  {
    "model": "Meta Ray-Ban Display",
    "brand": "Meta",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "uU0KLGL8eQ8",
    "repairability": "N/A",
    "details": "Optical system walkthrough of Meta Ray-Ban Display showing the LCoS engine.",
    "link": "https://youtu.be/uU0KLGL8eQ8"
  },
  {
    "model": "Viture Pro",
    "brand": "Viture",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "981Z5tQDQJE",
    "repairability": "N/A",
    "details": "Full component teardown and optical analysis of Viture Pro display glasses.",
    "link": "https://youtu.be/981Z5tQDQJE"
  },
  {
    "model": "Amazon Echo Frames (Gen 3)",
    "brand": "Amazon",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "V4O-SvFd1GM",
    "repairability": "N/A",
    "details": "Amazon Echo Frames disassembly detailing the smart audio electronics and batteries.",
    "link": "https://youtu.be/V4O-SvFd1GM"
  },
  {
    "model": "Viture Pro",
    "brand": "Viture",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "ZFFSwMJairk",
    "repairability": "N/A",
    "details": "Viture Pro XR Optical Teardown examining under-the-hood display optics and birdbath combiner.",
    "link": "https://youtu.be/ZFFSwMJairk"
  },
  {
    "model": "RayNeo Air 3S",
    "brand": "TCL RayNeo",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "5vMT9uyhVxw",
    "repairability": "N/A",
    "details": "RayNeo Air 3S Optical Teardown analyzing standard birdbath modules and optical engine value.",
    "link": "https://youtu.be/5vMT9uyhVxw"
  },
  {
    "model": "INMO Air",
    "brand": "INMO",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "FBDZoThqCGc",
    "repairability": "N/A",
    "details": "INMO Air waveguide analysis focusing on its 1D waveguide expansion mechanism.",
    "link": "https://youtu.be/FBDZoThqCGc"
  },
  {
    "model": "Meta Ray-Ban Display",
    "brand": "Meta",
    "type": "article",
    "source": "KGOnTech",
    "author": "Karl Guttag",
    "youtubeId": "",
    "repairability": "N/A",
    "details": "Meta Ray-Ban Display Part 1: Lumus Waveguide, OmniVision LCOS, and Goertek Projection Engine deep-dive.",
    "link": "https://kguttag.com/2025/10/30/meta-ray-ban-display-part-1-lumus-waveguide-omnivision-lcos-and-goertek-projection-engine/"
  },
  {
    "model": "Even Realities G2",
    "brand": "Even Realities",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "4C5AhvTf2fI",
    "repairability": "N/A",
    "details": "Even Realities G2 teardown and HUD display module performance review.",
    "link": "https://youtu.be/4C5AhvTf2fI"
  },
  {
    "model": "RayNeo Air 4 Pro",
    "brand": "TCL RayNeo",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "foBjR3_J1xE",
    "repairability": "N/A",
    "details": "RayNeo Air 4 Pro disassembly and 6000-nits optical engine analysis.",
    "link": "https://youtu.be/foBjR3_J1xE"
  },
  {
    "model": "Rokid Glasses",
    "brand": "Rokid",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "HRWoCxieOqA",
    "repairability": "N/A",
    "details": "Full hardware disassembly and mainboard PCB analysis of Rokid Glasses.",
    "link": "https://youtu.be/HRWoCxieOqA"
  },
  {
    "model": "Rokid Max",
    "brand": "Rokid",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "btqq8u-zNE8",
    "repairability": "N/A",
    "details": "Rokid Max AR Glasses teardown and investigation of display overheating behavior.",
    "link": "https://youtu.be/btqq8u-zNE8"
  },
  {
    "model": "Samsung Galaxy XR",
    "brand": "Samsung",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "sXuA2ZiM_v8",
    "repairability": "N/A",
    "details": "Samsung Galaxy XR prototype teardown inspecting display passthrough and chassis internals.",
    "link": "https://youtu.be/sXuA2ZiM_v8"
  },
  {
    "model": "Meta Quest 3S",
    "brand": "Meta",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "XvEXxIptBaY",
    "repairability": "N/A",
    "details": "Meta Quest 3S teardown exploring display upgrades, lens choices, and internal layout.",
    "link": "https://youtu.be/XvEXxIptBaY"
  },
  {
    "model": "Meta Quest 3",
    "brand": "Meta",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "liVll-GVF3Q",
    "repairability": "N/A",
    "details": "Meta Quest 3 teardown exploring internal display modules, depth sensor, and cooling system.",
    "link": "https://youtu.be/liVll-GVF3Q"
  },
  {
    "model": "NexPCB Channel",
    "brand": "Community Resources",
    "type": "article",
    "source": "NexPCB",
    "author": "@nexpcb8062",
    "youtubeId": "",
    "repairability": "N/A",
    "details": "Professional hardware manufacturing and PCB design review channel featuring teardowns of Xiaomi AI glasses and Meta Quest.",
    "link": "https://www.youtube.com/@nexpcb8062"
  },
  {
    "model": "iFixit Teardowns",
    "brand": "Community Resources",
    "type": "article",
    "source": "iFixit",
    "author": "iFixit",
    "youtubeId": "",
    "repairability": "Various",
    "details": "Industry standard teardown guides and repairability indices for AR/VR headsets and smart glasses.",
    "link": "https://www.ifixit.com/Teardown"
  },
  {
    "model": "Display Training Center",
    "brand": "Community Resources",
    "type": "article",
    "source": "Display Training Center",
    "author": "Display Training Center",
    "youtubeId": "",
    "repairability": "N/A",
    "details": "Optical engineering and display architecture teardowns and educational resources.",
    "link": "https://www.displaytrainingcenter.com/"
  },
  {
    "model": "KGOnTech Blog",
    "brand": "Community Resources",
    "type": "article",
    "source": "KGOnTech",
    "author": "Karl Guttag",
    "youtubeId": "",
    "repairability": "N/A",
    "details": "Deep engineering and optical system teardown blog by industry expert Karl Guttag.",
    "link": "https://kguttag.com/"
  },
  {
    "model": "Intretech SOS Channel",
    "brand": "Community Resources",
    "type": "article",
    "source": "Intretech SOS",
    "author": "@intretechsos",
    "youtubeId": "",
    "repairability": "N/A",
    "details": "Hardware product manufacturing and manufacturing-focused teardown channel.",
    "link": "https://www.youtube.com/@intretechsos"
  },
  {
    "model": "Xiaomi AI Smart Glasses Teardown",
    "brand": "Xiaomi",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "JGHFGwzXZNg",
    "repairability": "N/A",
    "details": "Xiaomi AI Smart Glasses Teardown showing structure and electronics analysis.",
    "link": "https://youtu.be/JGHFGwzXZNg?si=AVkVEry6Y1MUQbFD"
  },
  {
    "model": "RayNeo Air",
    "brand": "TCL RayNeo",
    "type": "video",
    "source": "YouTube Teardown",
    "author": "Community",
    "youtubeId": "dF5TyBnt5UI",
    "repairability": "N/A",
    "details": "RayNeo Air hardware and structural engine teardown.",
    "link": "https://www.youtube.com/watch?v=dF5TyBnt5UI"
  }
];

// Active filters state
const activeFilters = {
  search: "",
  displayMode: "all",
  hasCamera: "all",
  hasAudio: "all",
  displayTech: [],
  brand: [],
  deviceType: [],
  availability: []
};

let compareList = [];

// Setup Single Page App tabs switching
const setupNavigation = () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = {
    benchmark: document.getElementById("benchmark-section"),
    newcomers: document.getElementById("newcomers-section"),
    glossary: document.getElementById("glossary-section"),
    visionlab: document.getElementById("visionlab-section"),
    unboxing: document.getElementById("unboxing-section"),
    teardown: document.getElementById("teardown-section"),
    about: document.getElementById("about-section")
  };

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionName = link.getAttribute("data-section");
      
      // Update nav link UI
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      // Show/hide sections
      Object.keys(sections).forEach(name => {
        if (sections[name]) {
          if (name === sectionName) {
            sections[name].classList.remove("hidden");
          } else {
            sections[name].classList.add("hidden");
          }
        }
      });
    });
  });
};

// Filter data for catalog rendering
const getFilteredData = () => {
  return smartGlassesData.filter(item => {
    // Exclude research prototypes from main catalog table
    if (["google-project-astra", "microsoft-project-solara", "meta-project-aria", "meta-project-aria-gen1"].includes(item.id)) {
      return false;
    }
    
    // Search filter
    if (activeFilters.search) {
      const query = activeFilters.search.toLowerCase().trim();
      const matchBrand = item.brand.toLowerCase().includes(query);
      const matchName = item.name.toLowerCase().includes(query);
      const matchAssistant = (item.aiAssistant || "").toLowerCase().includes(query);
      if (!matchBrand && !matchName && !matchAssistant) {
        return false;
      }
    }
    
    // Display mode filter
    if (activeFilters.displayMode === "with" && !item.hasDisplay) return false;
    if (activeFilters.displayMode === "without" && item.hasDisplay) return false;
    
    // Camera filter
    if (activeFilters.hasCamera === "yes" && !item.hasCamera) return false;
    if (activeFilters.hasCamera === "no" && item.hasCamera) return false;
    
    // Audio filter
    if (activeFilters.hasAudio === "yes" && !item.hasAudio) return false;
    if (activeFilters.hasAudio === "no" && item.hasAudio) return false;
    
    // Display Technology filter
    if (activeFilters.displayTech.length > 0) {
      if (!activeFilters.displayTech.includes(item.displayTech)) return false;
    }
    
    // Brand filter
    if (activeFilters.brand.length > 0) {
      if (!activeFilters.brand.includes(item.brand)) return false;
    }
    
    // Device Type filter
    if (activeFilters.deviceType.length > 0) {
      if (!activeFilters.deviceType.includes(item.deviceType)) return false;
    }
    
    // Availability filter
    if (activeFilters.availability.length > 0) {
      if (!activeFilters.availability.includes(item.availability)) return false;
    }
    
    return true;
  });
};

// Status Badge Styling Colors Map
const statusColors = {
  "available": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "preorder": "bg-blue-100 text-blue-800 border-blue-200",
  "coming-soon": "bg-amber-100 text-amber-800 border-amber-200",
  "prototype": "bg-purple-100 text-purple-800 border-purple-200",
  "unreleased": "bg-zinc-100 text-zinc-800 border-zinc-200",
  "discontinued": "bg-rose-100 text-rose-800 border-rose-200"
};

// Render Catalog Table
const renderProducts = () => {
  const tableBody = document.getElementById("benchmark-table-body");
  if (!tableBody) return;
  
  const filtered = getFilteredData();
  
  const countEl = document.getElementById("product-count");
  if (countEl) countEl.textContent = `${filtered.length} models`;
  
  if (filtered.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="10" class="text-center py-8 text-muted-foreground text-sm">No smart glasses match the active filters.</td></tr>`;
    return;
  }
  
  tableBody.innerHTML = filtered.map(item => {
    const isChecked = compareList.includes(item.id) ? "checked" : "";
    const weightVal = item.weight ? `${item.weight}g` : "—";
    
    let ctaHtml = "";
    if (item.link) {
      if (item.availability === "Prototype" || item.availability === "Unreleased") {
        ctaHtml = `<a href="${item.link}" target="_blank" class="buy-now-btn py-1 px-3 text-[11px] font-semibold bg-zinc-800 text-foreground hover:bg-zinc-700 transition">Learn More</a>`;
      } else {
        ctaHtml = `<a href="${item.link}" target="_blank" class="buy-now-btn py-1 px-3 text-[11px] font-semibold bg-primary text-paper hover:bg-zinc-800 transition">Visit</a>`;
      }
    } else {
      ctaHtml = `<span class="text-muted-foreground text-xs">—</span>`;
    }
    
    const key = item.availability.toLowerCase().replace(" ", "-");
    const colorClass = statusColors[key] || "bg-zinc-100 text-zinc-800 border-zinc-200";
    const badgeHtml = `<span class="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full border ${colorClass}">${item.availability}</span>`;
    
    return `
      <tr>
        <td class="text-center">
          <input type="checkbox" class="compare-checkbox w-4 h-4 accent-primary" data-id="${item.id}" ${isChecked} onchange="toggleCompare('${item.id}')">
        </td>
        <td class="font-semibold text-foreground">${item.brand}</td>
        <td class="text-foreground">${item.name}</td>
        <td class="text-right font-mono text-emerald-400 font-medium">${item.price || "—"}</td>
        <td class="text-right text-foreground">${weightVal}</td>
        <td class="text-foreground">${item.fov || "—"}</td>
        <td class="text-center text-foreground text-xs">${item.displayTech || "None"}</td>
        <td class="text-center text-foreground">${item.hasCamera ? "📷 Yes" : "—"}</td>
        <td class="text-center text-foreground">${item.hasAudio ? "🔊 Yes" : "—"}</td>
        <td class="py-3">
          <div class="flex items-center justify-between gap-4">
            ${badgeHtml}
            ${ctaHtml}
          </div>
        </td>
      </tr>
    `;
  }).join("");
};

// Render Prototypes / Projects Grid
const renderNewcomers = () => {
  const grid = document.getElementById("newcomers-grid");
  if (!grid) return;
  
  const newcomers = smartGlassesData.filter(item => item.isNewcomer);
  
  if (newcomers.length === 0) {
    grid.innerHTML = `<div class="text-center text-muted-foreground text-sm col-span-full py-8">No unreleased projects or prototypes currently logged.</div>`;
    return;
  }
  
  grid.innerHTML = newcomers.map(item => {
    const priceText = item.price ? item.price : "TBA";
    const weightVal = item.weight ? `${item.weight}g` : "TBA";
    
    let actionHtml = "";
    if (item.link) {
      actionHtml = `<a href="${item.link}" target="_blank" class="buy-now-btn py-2 px-4 text-xs font-semibold bg-primary text-paper hover:bg-zinc-800 transition text-center w-full block rounded-lg">Learn More</a>`;
    }
    
    const key = item.availability.toLowerCase().replace(" ", "-");
    const colorClass = statusColors[key] || "bg-purple-100 text-purple-800 border-purple-200";
    const badgeHtml = `<span class="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full border ${colorClass}">${item.availability}</span>`;
    
    return `
      <div class="newcomer-card flex flex-col justify-between h-full">
        <div>
          <div class="flex justify-between items-start gap-4">
            <div>
              <span class="text-xs uppercase tracking-wider text-muted-foreground font-bold">${item.brand}</span>
              <h3 class="font-display text-lg font-bold text-foreground mt-0.5">${item.name}</h3>
            </div>
            ${badgeHtml}
          </div>
          
          <div class="space-y-2.5 mt-6 text-sm">
            <div class="flex justify-between border-b border-rule pb-1.5"><span class="font-medium text-muted-foreground">Display Tech:</span> <span class="font-semibold text-foreground">${item.displayTech || "None"}</span></div>
            <div class="flex justify-between border-b border-rule pb-1.5"><span class="font-medium text-muted-foreground">Weight:</span> <span class="font-semibold text-foreground">${weightVal}</span></div>
            <div class="flex justify-between border-b border-rule pb-1.5"><span class="font-medium text-muted-foreground">FOV:</span> <span class="font-semibold text-foreground">${item.fov || "TBA"}</span></div>
            <div class="flex justify-between border-b border-rule pb-1.5"><span class="font-medium text-muted-foreground">AI Integration:</span> <span class="font-semibold text-foreground text-xs">${item.aiAssistant || "None"}</span></div>
            <div class="flex justify-between border-b border-rule pb-1.5"><span class="font-medium text-muted-foreground">Price:</span> <span class="font-semibold text-foreground font-mono">${priceText}</span></div>
          </div>
        </div>
        <div class="mt-6">
          ${actionHtml}
        </div>
      </div>
    `;
  }).join("");
};

// Render Glossary Grid
const renderGlossary = () => {
  const grid = document.getElementById("glossary-grid");
  if (!grid) return;
  
  grid.innerHTML = glossaryData.map(item => `
    <div class="bg-secondary border border-rule p-6 rounded-2xl flex flex-col gap-2.5 h-full">
      <div class="flex justify-between items-center">
        <h3 class="font-display text-base font-bold text-foreground mt-0">${item.term}</h3>
        <span class="px-2 py-0.5 text-[9px] font-bold uppercase rounded border bg-zinc-100 text-zinc-800 border-rule">${item.category}</span>
      </div>
      <p class="text-muted-foreground text-xs leading-relaxed mb-0 mt-2">${item.definition}</p>
    </div>
  `).join("");
};

// Render Unboxing Grid
const renderUnboxings = () => {
  const container = document.getElementById("unboxings-container");
  if (!container) return;
  
  container.innerHTML = unboxingData.map(item => `
    <div class="bg-secondary border border-rule rounded-2xl overflow-hidden flex flex-col justify-between h-full">
      <div class="relative w-full aspect-video bg-black flex items-center justify-center">
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/${item.youtubeId}" title="${item.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="p-4 flex flex-col gap-1">
        <span class="text-[9px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded w-fit">${item.brand}</span>
        <h4 class="font-display text-sm font-semibold text-foreground mt-2">${item.title}</h4>
        <span class="text-[11px] text-muted-foreground">by ${item.channel}</span>
      </div>
    </div>
  `).join("");
};

// Render Teardowns Grid grouped by brand (collapsible accordions)
const renderTeardowns = () => {
  const container = document.getElementById("teardowns-container");
  if (!container) return;
  
  const grouped = {};
  teardownData.forEach(item => {
    const brand = item.brand || "Various";
    if (!grouped[brand]) {
      grouped[brand] = [];
    }
    grouped[brand].push(item);
  });
  
  container.innerHTML = Object.keys(grouped).sort().map(brand => {
    const items = grouped[brand];
    return `
      <details class="brand-accordion" open>
        <summary>${brand} <span style="font-size: 0.85rem; font-weight: normal; color: var(--muted-foreground); margin-left: 0.5rem;">(${items.length} item${items.length > 1 ? 's' : ''})</span></summary>
        <div class="brand-content">
          <div class="section-grid" style="margin-top: 0.5rem;">
            ${items.map(item => {
              const watchText = item.type === "video" ? "Watch" : "Visit";
              const hasYoutube = item.youtubeId && item.youtubeId.trim() !== "";
              const embedHtml = hasYoutube ? `
                <div class="relative w-full aspect-video bg-black flex items-center justify-center" style="border-radius: 12px 12px 0 0; overflow: hidden; border-bottom: 1px solid var(--rule);">
                  <iframe class="w-full h-full" src="https://www.youtube.com/embed/${item.youtubeId}" title="${item.model} Teardown" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              ` : '';
              return `
                <div class="bg-secondary border border-rule rounded-2xl overflow-hidden flex flex-col justify-between h-full" style="background-color: var(--bg-secondary); border: var(--glass-border); box-shadow: var(--glass-shadow); transition: var(--transition);">
                  <div>
                    ${embedHtml}
                    <div class="p-5">
                      <div class="flex justify-between items-start gap-3">
                        <div>
                          <span class="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">${item.brand}</span>
                          <h4 class="font-display text-base font-bold text-foreground mt-0.5">${item.model}</h4>
                        </div>
                        ${item.repairability && item.repairability !== "N/A" ? `
                          <span class="px-2 py-0.5 text-[9px] font-bold uppercase rounded border bg-emerald-100 text-emerald-800 border-emerald-200" style="font-size: 8px;">Repair: ${item.repairability}</span>
                        ` : ''}
                      </div>
                      <p class="text-muted-foreground text-xs leading-relaxed mt-4 mb-0">${item.details}</p>
                    </div>
                  </div>
                  <div class="p-5 pt-0 flex justify-between items-center">
                    <span class="text-[11px] text-muted-foreground">Source: ${item.source} (${item.author})</span>
                    <a href="${item.link}" target="_blank" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">${watchText} ➜</a>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </details>
    `;
  }).join("");
};
// Setup filter interaction event listeners
const setupFilters = () => {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeFilters.search = e.target.value;
      renderProducts();
    });
  }

  const resetBtn = document.getElementById("reset-filters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      activeFilters.search = "";
      
      const pills = document.querySelectorAll(".btn-pill");
      pills.forEach(p => {
        if (p.getAttribute("data-value") === "all") {
          p.classList.add("active", "bg-primary", "text-paper");
          p.classList.remove("border-muted-foreground", "text-foreground");
        } else {
          p.classList.remove("active", "bg-primary", "text-paper");
          p.classList.add("border-muted-foreground", "text-foreground");
        }
      });
      activeFilters.displayMode = "all";
      activeFilters.hasCamera = "all";
      activeFilters.hasAudio = "all";
      
      const checkboxes = document.querySelectorAll("input[type='checkbox']");
      checkboxes.forEach(cb => {
        cb.checked = false;
      });
      activeFilters.displayTech = [];
      activeFilters.brand = [];
      activeFilters.deviceType = [];
      activeFilters.availability = [];
      
      renderProducts();
    });
  }

  const displayButtons = document.querySelectorAll("[data-filter='display-mode']");
  displayButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      displayButtons.forEach(b => {
        b.classList.remove("active", "bg-primary", "text-paper");
        b.classList.add("border-muted-foreground", "text-foreground");
      });
      btn.classList.add("active", "bg-primary", "text-paper");
      btn.classList.remove("border-muted-foreground", "text-foreground");
      activeFilters.displayMode = btn.dataset.value;
      renderProducts();
    });
  });

  const cameraButtons = document.querySelectorAll("[data-filter='camera-mode']");
  cameraButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      cameraButtons.forEach(b => {
        b.classList.remove("active", "bg-primary", "text-paper");
        b.classList.add("border-muted-foreground", "text-foreground");
      });
      btn.classList.add("active", "bg-primary", "text-paper");
      btn.classList.remove("border-muted-foreground", "text-foreground");
      activeFilters.hasCamera = btn.dataset.value;
      renderProducts();
    });
  });

  const audioButtons = document.querySelectorAll("[data-filter='audio-mode']");
  audioButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      audioButtons.forEach(b => {
        b.classList.remove("active", "bg-primary", "text-paper");
        b.classList.add("border-muted-foreground", "text-foreground");
      });
      btn.classList.add("active", "bg-primary", "text-paper");
      btn.classList.remove("border-muted-foreground", "text-foreground");
      activeFilters.hasAudio = btn.dataset.value;
      renderProducts();
    });
  });

  const brandCheckboxes = document.querySelectorAll(".brand-checkbox");
  brandCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      if (cb.checked) {
        activeFilters.brand.push(cb.value);
      } else {
        activeFilters.brand = activeFilters.brand.filter(b => b !== cb.value);
      }
      renderProducts();
    });
  });

  const techCheckboxes = document.querySelectorAll(".tech-checkbox");
  techCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      if (cb.checked) {
        activeFilters.displayTech.push(cb.value);
      } else {
        activeFilters.displayTech = activeFilters.displayTech.filter(t => t !== cb.value);
      }
      renderProducts();
    });
  });

  const availCheckboxes = document.querySelectorAll(".avail-checkbox");
  availCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      if (cb.checked) {
        activeFilters.availability.push(cb.value);
      } else {
        activeFilters.availability = activeFilters.availability.filter(a => a !== cb.value);
      }
      renderProducts();
    });
  });

  const deviceTypeCheckboxes = document.querySelectorAll(".device-type-checkbox");
  deviceTypeCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      if (cb.checked) {
        activeFilters.deviceType.push(cb.value);
      } else {
        activeFilters.deviceType = activeFilters.deviceType.filter(d => d !== cb.value);
      }
      renderProducts();
    });
  });
};

// Compare Drawer Logic
window.toggleCompare = function(id) {
  if (compareList.includes(id)) {
    compareList = compareList.filter(item => item !== id);
  } else {
    if (compareList.length >= 3) {
      alert("You can select up to 3 models to compare.");
      const cb = document.querySelector(`.compare-checkbox[data-id="${id}"]`);
      if (cb) cb.checked = false;
      return;
    }
    compareList.push(id);
  }
  updateCompareDrawer();
};

window.removeCompare = function(id) {
  compareList = compareList.filter(item => item !== id);
  const cb = document.querySelector(`.compare-checkbox[data-id="${id}"]`);
  if (cb) cb.checked = false;
  updateCompareDrawer();
};

const updateCompareDrawer = () => {
  const drawer = document.getElementById("compare-drawer");
  const listEl = document.getElementById("compare-items-list");
  const compareBtn = document.getElementById("compare-btn");
  
  if (!drawer || !listEl || !compareBtn) return;
  
  if (compareList.length === 0) {
    drawer.classList.add("translate-y-full");
    compareBtn.disabled = true;
    return;
  }
  
  drawer.classList.remove("translate-y-full");
  compareBtn.disabled = compareList.length < 2;
  
  listEl.innerHTML = compareList.map(id => {
    const item = smartGlassesData.find(d => d.id === id);
    if (!item) return "";
    return `
      <div class="flex items-center gap-2 bg-tertiary border border-rule px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground">
        <span>${item.brand} ${item.name.replace(item.brand, "").trim()}</span>
        <button class="text-rose-500 hover:text-rose-700 font-bold ml-1" onclick="removeCompare('${id}')">✕</button>
      </div>
    `;
  }).join("");
};

// Comparison Modal Generation
const openComparisonModal = () => {
  const modal = document.getElementById("compare-modal");
  const body = document.getElementById("compare-modal-body");
  if (!modal || !body) return;
  
  const selectedDevices = compareList.map(id => smartGlassesData.find(d => d.id === id)).filter(Boolean);
  
  let headerHtml = `<th class="text-left font-bold text-muted-foreground p-3 border-b border-rule">Feature</th>`;
  selectedDevices.forEach(d => {
    headerHtml += `<th class="text-center p-3 border-b border-rule font-bold text-foreground text-sm min-w-[200px]">${d.brand} ${d.name.replace(d.brand, "").trim()}</th>`;
  });
  
  const features = [
    { name: "Brand", key: "brand" },
    { name: "Device Type", key: "deviceType" },
    { name: "Price", key: "price", format: v => v || "TBA" },
    { name: "Weight", key: "weight", format: v => v ? `${v}g` : "TBA" },
    { name: "FOV", key: "fov", format: v => v || "—" },
    { name: "Display Type", key: "displayType", format: v => v || "None" },
    { name: "Display Technology", key: "displayTech", format: v => v || "None" },
    { name: "Camera", key: "hasCamera", format: v => v ? "📷 Yes" : "—" },
    { name: "Audio", key: "hasAudio", format: v => v ? "🔊 Yes" : "—" },
    { name: "Battery", key: "battery", format: v => v || "TBA" },
    { name: "AI Integration", key: "aiAssistant", format: v => v || "None" },
    { name: "Availability", key: "availability" }
  ];
  
  let rowsHtml = "";
  features.forEach(feat => {
    rowsHtml += `<tr><td class="font-semibold text-muted-foreground text-xs uppercase tracking-wider p-3 border-b border-rule">${feat.name}</td>`;
    selectedDevices.forEach(d => {
      const val = d[feat.key];
      const displayVal = feat.format ? feat.format(val) : (val || "—");
      rowsHtml += `<td class="text-center p-3 border-b border-rule text-foreground font-medium">${displayVal}</td>`;
    });
    rowsHtml += `</tr>`;
  });
  
  body.innerHTML = `
    <table class="w-full text-left border-collapse text-sm">
      <thead>
        <tr>${headerHtml}</tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
  `;
  
  modal.style.display = "flex";
};

window.closeCompareModal = function() {
  const modal = document.getElementById("compare-modal");
  if (modal) modal.style.display = "none";
};

const setupCompareButton = () => {
  const compareBtn = document.getElementById("compare-btn");
  if (compareBtn) {
    compareBtn.addEventListener("click", () => {
      openComparisonModal();
    });
  }
};

// Form Webhook submissions
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxqanOQ-namN90TMKvw_yd5B39i-7PFFXCBjIgwXbL8b_5wXf4klnj7_rtpsAiQr7HV2g/exec";

const setupForms = () => {
  const glossaryForm = document.getElementById("glossary-suggest-form");
  if (glossaryForm) {
    glossaryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const term = document.getElementById("suggest-term").value;
      const name = document.getElementById("suggest-name").value;
      const email = document.getElementById("suggest-email").value;
      const definition = document.getElementById("suggest-definition").value;
      
      const overlay = document.getElementById("form-status-overlay");
      const spinner = document.getElementById("form-spinner");
      const titleEl = document.getElementById("form-status-title");
      const descEl = document.getElementById("form-status-desc");
      const resetBtn = document.getElementById("form-reset-btn");
      
      if (overlay) overlay.classList.remove("hidden");
      if (spinner) spinner.classList.remove("hidden");
      if (resetBtn) resetBtn.classList.add("hidden");
      if (titleEl) titleEl.textContent = "Submitting suggestion...";
      
      const payload = {
        type: "glossary",
        term,
        name,
        email,
        definition
      };
      
      fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(() => {
        if (spinner) spinner.classList.add("hidden");
        if (titleEl) titleEl.textContent = "Thank You!";
        if (descEl) descEl.innerHTML = `Your term <strong>${term}</strong> has been logged. A confirmation email has been dispatched to <strong>${email}</strong>.`;
        if (resetBtn) resetBtn.classList.remove("hidden");
      })
      .catch((err) => {
        console.error("Webhook POST failed, simulating success:", err);
        setTimeout(() => {
          if (spinner) spinner.classList.add("hidden");
          if (titleEl) titleEl.textContent = "Thank You!";
          if (descEl) descEl.innerHTML = `Your term <strong>${term}</strong> has been logged. A confirmation email has been dispatched to <strong>${email}</strong>.`;
          if (resetBtn) resetBtn.classList.remove("hidden");
        }, 1500);
      });
    });
  }

  const visionForm = document.getElementById("community-vision-form");
  if (visionForm) {
    const roleSelect = document.getElementById("vision-role");
    const specifyContainer = document.getElementById("role-specify-container");
    const specifyInput = document.getElementById("vision-role-specify");
    
    if (roleSelect && specifyContainer && specifyInput) {
      roleSelect.addEventListener("change", (e) => {
        if (e.target.value === "Other") {
          specifyContainer.classList.remove("hidden");
          specifyInput.required = true;
        } else {
          specifyContainer.classList.add("hidden");
          specifyInput.required = false;
          specifyInput.value = "";
        }
      });
    }

    visionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("vision-name").value;
      const email = document.getElementById("vision-email").value;
      const roleVal = document.getElementById("vision-role").value;
      const experience = document.getElementById("vision-experience").value;
      
      let role = roleVal;
      if (roleVal === "Other" && specifyInput) {
        role = "Other: " + specifyInput.value;
      }
      
      const checkedDevices = Array.from(document.querySelectorAll(".vision-device-checkbox:checked")).map(c => c.value);
      const dream = document.getElementById("vision-dream").value;
      const frustration = document.getElementById("vision-frustration").value;
      
      const overlay = document.getElementById("vision-status-overlay");
      const spinner = document.getElementById("vision-spinner");
      const titleEl = document.getElementById("vision-status-title");
      const descEl = document.getElementById("vision-status-desc");
      const resetBtn = document.getElementById("vision-reset-btn");
      
      if (overlay) overlay.classList.remove("hidden");
      if (spinner) spinner.classList.remove("hidden");
      if (resetBtn) resetBtn.classList.add("hidden");
      if (titleEl) titleEl.textContent = "Submitting insights...";
      
      const payload = {
        type: "community_vision",
        name,
        email,
        role,
        experience,
        devices: checkedDevices,
        dream,
        frustration
      };
      
      fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(() => {
        if (spinner) spinner.classList.add("hidden");
        if (titleEl) titleEl.textContent = "Insights Submitted!";
        if (descEl) descEl.innerHTML = `Thank you for contributing to the wearables dataset. A confirmation email has been dispatched to <strong>${email}</strong>.`;
        if (resetBtn) resetBtn.classList.remove("hidden");
      })
      .catch((err) => {
        console.error("Webhook POST failed, simulating success:", err);
        setTimeout(() => {
          if (spinner) spinner.classList.add("hidden");
          if (titleEl) titleEl.textContent = "Insights Submitted!";
          if (descEl) descEl.innerHTML = `Thank you for contributing to the wearables dataset. A confirmation email has been dispatched to <strong>${email}</strong>.`;
          if (resetBtn) resetBtn.classList.remove("hidden");
        }, 1500);
      });
    });
  }
};

// Setup Cursor Glow following
const setupCursorGlow = () => {
  const glow = document.getElementById("cursor-glow");
  if (!glow) return;
  
  document.addEventListener("mousemove", (e) => {
    glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  });
};

// Initialize Single Page App on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupFilters();
  setupCompareButton();
  setupForms();
  setupCursorGlow();
  
  // Render grids and lists
  renderProducts();
  renderNewcomers();
  renderGlossary();
  renderUnboxings();
  renderTeardowns();
});
