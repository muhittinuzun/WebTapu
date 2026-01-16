
        const { createApp, ref, computed, onMounted, nextTick, watch, markRaw, toRaw } = Vue;

        const translations = {
            tr: {
                loading: 'YÜKLENİYOR...', loadingMsg: 'Suriye CBS Çekirdeğine Bağlanılıyor...', menuGeneral: 'GENEL İŞLEMLER', menuServices: 'HİZMETLER', menuAdmin: 'YÖNETİCİ & DENETİM', navMap: 'Harita & CBS', navProperties: 'Mülk Listesi', navTransfer: 'Tapu Devir/Satış', navValuation: 'Değer Hesapla', navExpropriation: 'Kamulaştırma', navLogs: 'Denetim Logları', navOcr: 'Akıllı Tapu (AI)', searchPlaceholder: 'Ada/Parsel, Koordinat, Konum...', totalProperties: 'TOPLAM MÜLK', pendingApps: 'BEKLEYEN', riskCount: 'RİSKLİ', dashboardTitle: 'CBS Paneli', propertyListTitle: 'Taşınmaz Kayıtları', transferTitle: 'RESMİ TAPU DEVİR İŞLEMİ', colParcel: 'Ada/Parsel', colLocation: 'Konum', colType: 'Nitelik', colValue: 'Rayiç Bedel', colAction: 'İşlem', owner: 'Malik', btnViewDeed: 'Tapu', exportPdf: 'PDF İndir', typeSale: 'Satış', typeInheritance: 'Miras', labelSelectProp: 'Mülk Seçiniz', labelBuyerID: 'Alıcı Kimlik No', btnStartApp: 'Başvuru Yap', modalDeedTitle: 'TAPU SENEDİ', colCity: 'İl/İlçe', modalAppTitle: 'Randevu Oluştur', labelDate: 'Tarih Seçiniz', btnConfirm: 'Onayla', btnCheck: 'SORGULA', btnRecalculate: 'Yeniden Hesapla', estValue: 'Tahmini Değer', area: 'Yüzölçümü', age: 'Bina Yaşı', expSubtitle: 'Resmi Kısıtlama ve Kamulaştırma Sorgusu', decisionDate: 'Karar Tarihi', authority: 'İlgili Kurum', logout: 'Çıkış Yap', activeRegion: 'AKTİF BÖLGE',
                roleCitizen: 'Vatandaş', roleOfficer: 'Memur', roleRealtor: 'Emlakçı', loggedInAs: 'Giriş Yapan', secureLogin: 'Güvenli Giriş',
                ocrOriginalDoc: 'Orijinal Tapu Belgesi', ocrUpload: 'Belge Yükle', ocrPlaceholder: 'Tapu görselini veya PDF\'i buraya yükleyin', ocrAnalysisTitle: 'Yapay Zeka Analizi', ocrAnalysisSubtitle: 'Belge taranıyor ve veriler çıkarılıyor...', ocrAiNote: 'Bu veriler yapay zeka ile çıkarılmıştır, lütfen kontrol ediniz.', ocrVerifyMap: 'Haritada Doğrula', ocrConfirm: 'Verileri Onayla',
                ownerName: 'Malik Adı', acquisitionReason: 'Edinim Sebebi', electronicValidation: 'Elektronik Doğrulama', propertyInfo: 'Taşınmaz Bilgileri', ownerInfo: 'Mülkiyet Bilgileri', officialTitle: 'Yetkili İmza'
            },
            ar: {
                loading: 'جار التحميل...', loadingMsg: 'جاري الاتصال...', menuGeneral: 'العمليات', menuServices: 'الخدمات', menuAdmin: 'الإدارة', navMap: 'الخريطة', navProperties: 'القائمة', navTransfer: 'نقل الملكية', navValuation: 'التقييم', navExpropriation: 'الاستعلام', navLogs: 'السجلات', navOcr: 'طابو ذكي (AI)',
                roleCitizen: 'مواطن', roleOfficer: 'موظف', roleRealtor: 'وسيط',
                ocrOriginalDoc: 'الوثيقة الأصلية', ocrUpload: 'رفع وتحليل', ocrPlaceholder: 'تحميل صورة الطابو', ocrAnalysisTitle: 'تحليل الذكاء الاصطناعي', ocrAnalysisSubtitle: 'جاري المعالجة...', ocrVerifyMap: 'مطابقة على الخريطة', ocrConfirm: 'تأكيد وحفظ',
                ownerName: 'اسم المالك', acquisitionReason: 'سبب الاكتساب', electronicValidation: 'التحقق الإلكتروني', propertyInfo: 'معلومات العقار', ownerInfo: 'معلومات الملكية', officialTitle: 'التوقيع المعتمد'
            },
            en: {
                loading: 'LOADING...', loadingMsg: 'Connecting to Damascus GIS Core...', menuGeneral: 'OPERATIONS', menuServices: 'SERVICES', menuAdmin: 'ADMIN & AUDIT', navMap: 'Map & GIS', navProperties: 'Properties', navTransfer: 'Transfer', navValuation: 'Valuation', navExpropriation: 'Inquiry', navLogs: 'Audit Logs', navOcr: 'Smart Deed (AI)', searchPlaceholder: 'Search Parcel, Coords, Location...', totalProperties: 'PROPERTIES', pendingApps: 'PENDING', riskCount: 'AT RISK', dashboardTitle: 'GIS Dashboard', propertyListTitle: 'Property Records', transferTitle: 'OFFICIAL TITLE TRANSFER', colParcel: 'Parcel', colLocation: 'Location', colType: 'Type', colValue: 'Value', colAction: 'Action', owner: 'Owner', btnViewDeed: 'Deed', exportPdf: 'Export PDF', typeSale: 'Sale', typeInheritance: 'Inheritance', labelSelectProp: 'Select Property', labelBuyerID: 'Buyer ID', btnStartApp: 'Apply', modalDeedTitle: 'TITLE DEED', colCity: 'City/District', modalAppTitle: 'Appointment', labelDate: 'Select Date', btnConfirm: 'Confirm', btnCheck: 'CHECK', btnRecalculate: 'Recalculate', estValue: 'Est. Value', area: 'Area', age: 'Building Age', expSubtitle: 'Official Restriction Inquiry', decisionDate: 'Decision Date', authority: 'Authority', logout: 'Logout', activeRegion: 'ACTIVE REGION',
                roleCitizen: 'Citizen', roleOfficer: 'Officer', roleRealtor: 'Realtor', loggedInAs: 'Logged In As', secureLogin: 'Secure Login',
                ocrOriginalDoc: 'Original Title Deed', ocrUpload: 'Upload Document', ocrPlaceholder: 'Upload deed image or PDF here', ocrAnalysisTitle: 'AI Analysis', ocrAnalysisSubtitle: 'Scanning document and extracting data...', ocrAiNote: 'Data extracted by AI, please verify.', ocrVerifyMap: 'Verify on Map', ocrConfirm: 'Confirm Data',
                ownerName: 'Owner Name', acquisitionReason: 'Acquisition Reason', electronicValidation: 'Electronic Validation', propertyInfo: 'Property Info', ownerInfo: 'Ownership Info', officialTitle: 'Authorized Signature'
            }
        };

        createApp({
            setup() {
                // 1. STATE
                const loading = ref(false);
                const loadingMsg = ref('');
                const lang = ref('ar');
                const isLoggedIn = ref(false);
                const loginCreds = ref({ username: '', password: '' });
                const loginProcessing = ref(false);
                const isMobileMenuOpen = ref(false);
                const loginRole = ref('citizen');
                const currentTab = ref('dashboard');
                const map = ref(null);
                const ocrMap = ref(null);
                const searchQuery = ref('');
                const selectedPropertyId = ref(1);
                const properties = ref([]);
                const auditLogs = ref([]);
                const geoJsonLayer = ref(null);
                const ocrGeoJsonLayer = ref(null);
                const valRegion = ref('mezzeh');
                const valArea = ref(150);
                const valAge = ref(5);
                const activeRegionName = ref('Damascus / Mezzeh');
                const expLoading = ref(false);
                const expResult = ref(null);
                const modals = ref({ deed: false, appointment: false, activeProp: null, ocrMap: false, parcelAction: false, aiAnalysis: false });
                const toast = ref({ show: false, title: '', message: '' });
                const showMapSettings = ref(false);
                const ocrImage = ref(null);
                const ocrScanning = ref(false);
                const ocrData = ref(null);
                const ocrForm = ref({
                    owner_name: '',
                    signature_date: '',
                    share_text: '',
                    province: '',
                    district: '',
                    directorate: '',
                    property_number: '',
                    property_type: '',
                    area_text: '',
                    daily_register_no: '',
                    transaction_type: '',
                    description: ''
                }); // OCR form data
                const tempSelectedParcel = ref(null); // For map picker
                const kmzLoading = ref(false); // New state for KMZ specific loading
                const mapStyle = ref({
                    color: '#e11d48', // Default Rose 600
                    weight: 2,
                    fillOpacity: 0.2
                });

                // Viewer State
                const viewerScale = ref(1);
                const viewerPanX = ref(0);
                const viewerPanY = ref(0);
                const viewerMode = ref('pan'); // 'pan' | 'select'
                const isPanning = ref(false);
                const isSelecting = ref(false);
                const selectionStart = ref({ x: 0, y: 0 });
                const selectionRect = ref({ top: 0, left: 0, width: 0, height: 0 });
                const viewerContainer = ref(null);

                // 2. HELPER FUNCTIONS
                const showSuccess = (title, msg) => { toast.value = { show: true, title, message: msg }; setTimeout(() => toast.value.show = false, 3000); };
                const setLang = (c) => { lang.value = c; document.documentElement.setAttribute('dir', c === 'ar' ? 'rtl' : 'ltr'); };
                const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
                const getIcon = (tab) => { const icons = { dashboard: 'fa-map-location-dot', properties: 'fa-list-check', transfer: 'fa-handshake-simple', valuation: 'fa-calculator', expropriation: 'fa-gavel', logs: 'fa-shield-cat', ocr: 'fa-wand-magic-sparkles' }; return 'fa-solid ' + icons[tab]; };
                const changeTab = (tab) => {
                    currentTab.value = tab;
                    isMobileMenuOpen.value = false;
                    if (tab === 'dashboard') nextTick(() => map.value?.invalidateSize());
                };

                // Watch for map style changes to re-render
                watch(mapStyle, () => {
                    if (currentTab.value === 'dashboard' && map.value) {
                        renderGeoJSON();
                    }
                }, { deep: true });

                // 3. COMPUTED
                const t = computed(() => translations[lang.value]);
                const selectedProperty = computed(() => properties.value.find(p => p.id === selectedPropertyId.value));
                const totalValue = computed(() => {
                    const sum = properties.value.reduce((acc, p) => acc + (p.price || 0), 0);
                    return '$' + (sum / 1000000).toFixed(1) + 'M';
                });
                const filteredProperties = computed(() => {
                    let props = properties.value;
                    if (!searchQuery.value) return props;
                    const q = searchQuery.value.toLowerCase().trim();
                    return props.filter(p => {
                        const adaParsel = `${p.ada}/${p.parsel}`;
                        return (p.ada.toString().includes(q) || p.parsel.toString().includes(q) || adaParsel.includes(q) || (p.owner && p.owner.toLowerCase().includes(q)) || (p.location && p.location.toLowerCase().includes(q)));
                    });
                });
                const valuationResult = computed(() => { return `$${(valArea.value * 2000).toLocaleString()}`; });

                // 4. LOGIC
                const initMap = () => {
                    if (map.value) return;
                    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles &copy; Esri' });
                    map.value = markRaw(L.map('map', { center: [33.5138, 36.29], zoom: 14, layers: [satelliteLayer], zoomControl: false }));
                    L.control.zoom({ position: 'bottomright' }).addTo(map.value);

                    // If properties were pre-loaded (e.g. via KMZ auto-load), render them now
                    if (properties.value.length > 0) {
                        nextTick(() => renderGeoJSON());
                    }
                };

                const initOcrMap = () => {
                    // Separate map instance for OCR Picker to avoid conflicts
                    if (ocrMap.value) {
                        ocrMap.value.remove(); // Reset if exists
                    }

                    setTimeout(() => {
                        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles &copy; Esri' });
                        ocrMap.value = markRaw(L.map('ocr-map-picker', { center: [33.5138, 36.29], zoom: 14, layers: [satelliteLayer], renderer: L.canvas(), zoomControl: false }));
                        L.control.zoom({ position: 'bottomright' }).addTo(ocrMap.value);

                        // Add parcels to this map too
                        const rawProperties = toRaw(properties.value);
                        const featureCollection = { type: "FeatureCollection", features: rawProperties.map(p => ({ type: "Feature", properties: { id: p.id, ...p }, geometry: toRaw(p.geometry) })) };

                        const layer = L.geoJSON(featureCollection, {
                            style: { color: '#3b82f6', weight: 2, fillOpacity: 0.1 },
                            onEachFeature: (feature, layer) => {
                                layer.on('click', (e) => {
                                    L.DomEvent.stopPropagation(e);
                                    const p = feature.properties;
                                    selectedPropertyId.value = p.id;
                                    modals.value.activeProp = properties.value.find(x => x.id === p.id) || p;
                                    modals.value.parcelAction = true;

                                    tempSelectedParcel.value = `${p.ada}/${p.parsel}`;
                                    // Update form data (mock)
                                    if (ocrData.value) {
                                        ocrData.value.kimlik.parsel_no = `${p.ada}/${p.parsel}`;
                                        ocrData.value.baslik.bolge = p.location;
                                    }
                                });
                            }
                        }).addTo(ocrMap.value);

                        // Fit bounds
                        try { ocrMap.value.fitBounds(layer.getBounds()); } catch (e) { }
                    }, 100);
                };

                const renderGeoJSON = () => {
                    const rawMap = toRaw(map.value);
                    if (!rawMap) return;
                    if (geoJsonLayer.value) rawMap.removeLayer(toRaw(geoJsonLayer.value));

                    const rawProperties = toRaw(properties.value);
                    const featureCollection = {
                        type: "FeatureCollection",
                        features: rawProperties.map(p => ({
                            type: "Feature",
                            properties: { id: p.id, ...p },
                            geometry: toRaw(p.geometry)
                        }))
                    };

                    geoJsonLayer.value = markRaw(L.geoJSON(featureCollection, {
                        style: (feature) => ({
                            color: mapStyle.value.color,
                            weight: mapStyle.value.weight,
                            fillOpacity: mapStyle.value.fillOpacity,
                            fillColor: mapStyle.value.color,
                            interactive: true
                        }),
                        onEachFeature: (feature, layer) => {
                            layer.on({
                                click: (e) => {
                                    L.DomEvent.stopPropagation(e);
                                    const p = properties.value.find(x => x.id === feature.properties.id);
                                    if (p) {
                                        selectedPropertyId.value = p.id;
                                        modals.value.activeProp = p;
                                        modals.value.parcelAction = true;
                                    }
                                },
                                mouseover: (e) => {
                                    const l = e.target;
                                    l.setStyle({
                                        weight: mapStyle.value.weight + 2,
                                        fillOpacity: Math.min(mapStyle.value.fillOpacity + 0.2, 1)
                                    });
                                },
                                mouseout: (e) => {
                                    geoJsonLayer.value.resetStyle(e.target);
                                }
                            });
                        }
                    }).addTo(rawMap));

                    try {
                        const bounds = geoJsonLayer.value.getBounds();
                        if (bounds.isValid()) rawMap.fitBounds(bounds);
                    } catch (e) { }
                };

                const handleLogin = () => {
                    loginProcessing.value = true;
                    // Eğer önceden KMZ vb ile parsel yüklenmemişse örnek parselleri oluştur
                    setTimeout(() => {
                        isLoggedIn.value = true;
                        loginProcessing.value = false;
                        loading.value = true;

                        if (properties.value.length === 0) {
                            generateMockParcels();
                        }

                        setTimeout(() => {
                            loading.value = false;
                            nextTick(() => initMap());
                        }, 1000);
                    }, 1000);
                };

                const generateMockParcels = () => {
                    // Generate logic... (Simplified for brevity as it's same as before)
                    const centerLat = 33.5138, centerLng = 36.2900;
                    const newProps = [];
                    for (let i = 0; i < 50; i++) {
                        const lat = centerLat + (Math.random() - 0.5) * 0.02;
                        const lng = centerLng + (Math.random() - 0.5) * 0.03;
                        newProps.push({
                            id: 1000 + i, ada: 101, parsel: i + 1, location: activeRegionName.value, type: 'Land', owner: 'MOCK OWNER', area: 500 + i * 10,
                            geometry: { type: "Polygon", coordinates: [[[lng - 0.0005, lat - 0.0005], [lng + 0.0005, lat - 0.0005], [lng + 0.0005, lat + 0.0005], [lng - 0.0005, lat + 0.0005], [lng - 0.0005, lat - 0.0005]]] }
                        });
                    }
                    properties.value = newProps;
                };

                // n8n webhook notu:
                // - /webhook-test/* sadece n8n editöründe "Listen for test event" açıkken çalışır (aksi halde 404 döner)
                // - Canlı kullanım için genelde /webhook/* (workflow aktifken) kullanılır
                //
                // İpucu: URL'yi kod değiştirmeden test etmek için query param ile override edebilirsin:
                // - index.html?n8n=https%3A%2F%2Fn8n.ittyazilim.com%2Fwebhook%2F6a41b4a1-abcb-4610-85c8-8b2ac4cb680a
                const N8N_WEBHOOK_URL_TEST = 'https://n8n.ittyazilim.com/webhook-test/6a41b4a1-abcb-4610-85c8-8b2ac4cb680a';
                const N8N_WEBHOOK_URL_PROD = 'https://n8n.ittyazilim.com/webhook/6a41b4a1-abcb-4610-85c8-8b2ac4cb680a';
                const ocrWebhookMode = ref('prod'); // 'prod' | 'test'
                const ocrInput = ref(null); // <input type="file" ref="ocrInput">

                const resolveN8nWebhookUrl = () => {
                    // Check if we are running on localhost (use proxy)
                    const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

                    try {
                        const qp = new URLSearchParams(location.search);
                        const override = qp.get('n8n');
                        if (override) return override;
                    } catch (_) { }

                    let url = ocrWebhookMode.value === 'test' ? N8N_WEBHOOK_URL_TEST : N8N_WEBHOOK_URL_PROD;

                    // If local, rewrite URL to use local proxy
                    if (isLocalhost) {
                        // Replace 'https://n8n.ittyazilim.com' with '/n8n-proxy'
                        url = url.replace('https://n8n.ittyazilim.com', '/n8n-proxy');
                    }

                    return url;
                };

                // Shift+Click => TEST, normal click => PROD
                const openOcrPicker = (e) => {
                    ocrWebhookMode.value = e?.shiftKey ? 'test' : 'prod';
                    console.log(`OCR: Mod seçildi: ${ocrWebhookMode.value.toUpperCase()}`);

                    if (!ocrInput.value) {
                        console.error('OCR: ocrInput ref bulunamadı');
                        return;
                    }

                    // Aynı dosyayı tekrar seçebilmek için input'u sıfırla
                    ocrInput.value.value = '';
                    ocrInput.value.click();
                };

                // --- VIEWER FUNCTIONS ---
                const resetViewer = () => {
                    viewerScale.value = 1;
                    viewerPanX.value = 0;
                    viewerPanY.value = 0;
                };

                const handleViewerWheel = (e) => {
                    e.preventDefault();
                    const delta = e.deltaY > 0 ? 0.9 : 1.1;
                    const nextScale = viewerScale.value * delta;
                    if (nextScale > 0.1 && nextScale < 20) {
                        viewerScale.value = nextScale;
                    }
                };

                const handleViewerMouseDown = (e) => {
                    if (viewerMode.value === 'pan') {
                        isPanning.value = true;
                    } else {
                        isSelecting.value = true;
                        const rect = viewerContainer.value.getBoundingClientRect();
                        selectionStart.value = { x: e.clientX - rect.left, y: e.clientY - rect.top };
                        selectionRect.value = { top: selectionStart.value.y, left: selectionStart.value.x, width: 0, height: 0 };
                    }
                };

                const handleViewerMouseMove = (e) => {
                    if (isPanning.value) {
                        viewerPanX.value += e.movementX;
                        viewerPanY.value += e.movementY;
                    } else if (isSelecting.value) {
                        const rect = viewerContainer.value.getBoundingClientRect();
                        const currentX = e.clientX - rect.left;
                        const currentY = e.clientY - rect.top;

                        selectionRect.value = {
                            left: Math.min(selectionStart.value.x, currentX),
                            top: Math.min(selectionStart.value.y, currentY),
                            width: Math.abs(currentX - selectionStart.value.x),
                            height: Math.abs(currentY - selectionStart.value.y)
                        };
                    }
                };

                const handleViewerMouseUp = () => {
                    if (isSelecting.value && selectionRect.value.width > 10) {
                        // Zoom to selection
                        const containerRect = viewerContainer.value.getBoundingClientRect();
                        const scaleX = containerRect.width / selectionRect.value.width;
                        const scaleY = containerRect.height / selectionRect.value.height;
                        const newScale = Math.min(scaleX, scaleY) * 0.9;

                        const centerX = selectionRect.value.left + selectionRect.value.width / 2;
                        const centerY = selectionRect.value.top + selectionRect.value.height / 2;

                        viewerScale.value *= newScale;
                        viewerPanX.value = (containerRect.width / 2 - centerX) * viewerScale.value;
                        viewerPanY.value = (containerRect.height / 2 - centerY) * viewerScale.value;

                        viewerMode.value = 'pan';
                    }
                    isPanning.value = false;
                    isSelecting.value = false;
                };

                const handleOcrUpload = async (event) => {
                    const file = event.target.files[0];
                    if (!file) return;

                    console.log('OCR: Dosya yüklendi:', file.name, file.type, file.size, 'bytes');

                    // Görseli önizleme için oku
                    const previewReader = new FileReader();
                    previewReader.onload = (e) => { ocrImage.value = e.target.result; };
                    previewReader.readAsDataURL(file);

                    ocrScanning.value = true;
                    ocrData.value = null;

                    try {
                        // Dosyayı Base64'e çevir (n8n workflow JSON bekliyor)
                        const base64 = await new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = () => {
                                // DataURL'den "data:image/jpeg;base64," kısmını ayıkla
                                const base64String = reader.result.split(',')[1];
                                resolve(base64String);
                            };
                            reader.onerror = reject;
                            reader.readAsDataURL(file);
                        });

                        const webhookUrl = resolveN8nWebhookUrl();
                        console.log('OCR: Webhook\'a gönderiliyor...', webhookUrl);

                        const response = await fetch(webhookUrl, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ data: base64 }) // Payload: { "data": "BASE64_STRING" }
                        });

                        console.log('OCR: Webhook yanıtı:', response.status, response.statusText);

                        if (response.ok) {
                            const result = await response.json();
                            console.log('--- OCR WEBHOOK RAW DATA ---');
                            console.dir(result); // Browser console'da objeyi detaylı görmek için
                            console.log('Stringified:', JSON.stringify(result));

                            // n8n bazen [{json:{...}}] veya {...} döner. 
                            // En içteki anlamlı datayı bulmaya çalışalım.
                            let data = result;
                            if (Array.isArray(data)) data = data[0];
                            if (data && data.json) data = data.json;

                            console.log('--- OCR PROCESSED DATA ---', data);

                            const parsed = { baslik: {}, kimlik: {}, mulkiyet: {} };

                            // Ultra Robust Recursive Search
                            const findDeep = (obj, key) => {
                                if (!obj || typeof obj !== 'object') return null;
                                if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') return obj[key];

                                if (Array.isArray(obj)) {
                                    for (const item of obj) {
                                        const found = findDeep(item, key);
                                        if (found !== null) return found;
                                    }
                                } else {
                                    for (const k in obj) {
                                        if (k === 'pages' || k === 'sections' || k === 'data') { // Önce bildiğimiz dallara bak
                                            const found = findDeep(obj[k], key);
                                            if (found !== null) return found;
                                        }
                                    }
                                    // Bulunamazsa her yeri tara
                                    for (const k in obj) {
                                        if (k !== 'pages' && k !== 'sections' && k !== 'data') {
                                            const found = findDeep(obj[k], key);
                                            if (found !== null) return found;
                                        }
                                    }
                                }
                                return null;
                            };

                            const getV = (key) => findDeep(data, key) || '';

                            parsed.mulkiyet.malik = getV('owner_name') || 'Unknown';
                            parsed.mulkiyet.tarih = getV('signature_date') || getV('transaction_date');
                            parsed.mulkiyet.hisse = getV('share_text');
                            parsed.baslik.bolge = getV('province') || getV('bolge');
                            parsed.baslik.mudurluk = getV('directorate') || getV('office_or_circle');
                            parsed.kimlik.bolge_semt = getV('district') || getV('bolge_semt');
                            parsed.kimlik.parsel_no = getV('property_number') || getV('parsel_no');
                            parsed.kimlik.cins_kisa = getV('property_type') || getV('cins_kisa');
                            parsed.kimlik.aciklama = getV('description') || getV('aciklama');
                            parsed.kimlik.yuzolcumu = getV('area_text');
                            parsed.mulkiyet.yevmiye = getV('daily_register_no');
                            parsed.mulkiyet.islem_turu = getV('transaction_type');

                            console.log('OCR: Eşleşen Veri:', parsed);

                            ocrData.value = parsed;
                            // OCR form verisini de doldur
                            ocrForm.value = {
                                owner_name: parsed.mulkiyet.malik || '',
                                signature_date: parsed.mulkiyet.tarih || '',
                                share_text: parsed.mulkiyet.hisse || '',
                                province: parsed.baslik.bolge || '',
                                district: parsed.kimlik.bolge_semt || '',
                                directorate: parsed.baslik.mudurluk || '',
                                property_number: parsed.kimlik.parsel_no || '',
                                property_type: parsed.kimlik.cins_kisa || '',
                                area_text: parsed.kimlik.yuzolcumu || '',
                                daily_register_no: parsed.mulkiyet.yevmiye || '',
                                transaction_type: parsed.mulkiyet.islem_turu || '',
                                description: parsed.kimlik.aciklama || ''
                            };
                            showSuccess('Başarılı', 'Tapu verisi işlendi.');
                        } else {
                            const errorText = await response.text();
                            console.error('OCR: Webhook hatası:', response.status, errorText);

                            if (errorText.includes('POST requests') || errorText.includes('Method not allowed')) {
                                showSuccess('n8n Ayar Hatası', 'n8n Webhook node\'u "GET" modunda kalmış. Lütfen n8n\'de Webhook node ayarlarını açıp Method\'u "POST" yapın.');
                            } else if (response.status === 404) {
                                console.error("OCR: 404 alındı. Muhtemel neden: /webhook-test URL'si dinlemede değil (n8n'de 'Listen for test event' açık olmalı) veya URL yolu yanlış.");
                                showSuccess('n8n Bağlantı Sorunu', 'Webhook bulunamadı (404). n8n\'de "Listen for test event" butonuna bastınız mı?');
                            }
                            throw new Error(`Webhook hatası: ${response.status} - ${errorText}`);
                        }
                    } catch (error) {
                        console.error("OCR Error:", error);

                        // CORS hatasını kontrol et
                        if (error.message.includes('CORS') || error.message.includes('Failed to fetch')) {
                            console.error('CORS Hatası: n8n webhook\'una CORS header\'ları eklenmeli!');
                            showSuccess('CORS Hatası', 'Webhook\'a erişilemiyor. n8n webhook\'una CORS header\'ları eklenmeli:\n\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: POST\nAccess-Control-Allow-Headers: Content-Type');
                        }

                        console.warn("OCR Error - İşlem durduruldu");
                        showSuccess('Hata', 'OCR işlemi başarısız: ' + error.message);
                    } finally {
                        ocrScanning.value = false;
                    }
                };

                // --- KMZ / KML LOADING ---
                const processFileContent = async (arrayBuffer, isKmz) => {
                    kmzLoading.value = true;
                    loadingMsg.value = isKmz ? 'KMZ Çözülüyor...' : 'KML İşleniyor...';

                    try {
                        let kmlText;
                        if (isKmz) {
                            const zip = await JSZip.loadAsync(arrayBuffer);
                            const kmlFile = Object.keys(zip.files).find(f => f.endsWith('.kml'));
                            if (!kmlFile) throw new Error('KMZ içinde KML dosyası bulunamadı.');
                            kmlText = await zip.files[kmlFile].async('string');
                        } else {
                            kmlText = new TextDecoder().decode(arrayBuffer);
                        }

                        const kmlDom = new DOMParser().parseFromString(kmlText, 'text/xml');
                        const geoJson = toGeoJSON.kml(kmlDom);

                        // Parse properties from GeoJSON - Filter out Points (markers)
                        const filteredFeatures = geoJson.features.filter(f => f.geometry && (f.geometry.type === 'Polygon' || f.geometry.type === 'MultiPolygon' || f.geometry.type === 'LineString' || f.geometry.type === 'MultiLineString'));

                        properties.value = filteredFeatures.map((f, index) => {
                            const p = f.properties || {};
                            return {
                                id: p.id || index + 1,
                                ada: p.ada || p.PARSEL_NO?.split('/')[0] || '---',
                                parsel: p.parsel || p.PARSEL_NO?.split('/')[1] || '---',
                                location: p.location || p.MAHALLE || 'Şam / Merkez',
                                type: p.type || p.CINSI || 'Arsa',
                                price: p.price || Math.floor(Math.random() * 500000) + 100000,
                                owner: p.owner || p.AD_SOYAD || 'Meçhul Malik',
                                area: p.area || p.ALAN || '---',
                                geometry: f.geometry
                            };
                        });

                        // Add to map only if map is initialized
                        const rawMap = toRaw(map.value);
                        if (rawMap) {
                            if (geoJsonLayer.value) rawMap.removeLayer(toRaw(geoJsonLayer.value));
                            geoJsonLayer.value = markRaw(L.geoJSON({ type: "FeatureCollection", features: filteredFeatures }, {
                                style: {
                                    color: mapStyle.value.color,
                                    weight: mapStyle.value.weight,
                                    fillOpacity: mapStyle.value.fillOpacity,
                                    fillColor: mapStyle.value.color
                                },
                                onEachFeature: (feature, layer) => {
                                    layer.bindPopup(`<div class="p-3 font-sans text-right" dir="rtl">
                                        <h4 class="font-bold border-b pb-1 mb-2">Parsel: ${feature.properties.ada || '---'}/${feature.properties.parsel || '---'}</h4>
                                        <p class="text-xs mb-1"><b>Malik:</b> ${feature.properties.owner || '---'}</p>
                                        <p class="text-xs"><b>Alan:</b> ${feature.properties.area || '---'} m²</p>
                                    </div>`);
                                }
                            }).addTo(rawMap));

                            const bounds = geoJsonLayer.value.getBounds();
                            if (bounds.isValid()) rawMap.fitBounds(bounds);
                        }

                        showSuccess('Başarılı', `${properties.value.length} parsel yüklendi.`);
                    } catch (err) {
                        console.error('File Error:', err);
                        showSuccess('Hata', 'Dosya işlenemedi: ' + err.message);
                    } finally {
                        kmzLoading.value = false;
                        loadingMsg.value = '';
                    }
                };

                const handleFileUpload = (event) => {
                    const file = event.target.files[0];
                    if (!file) return;
                    const isKmz = file.name.endsWith('.kmz');
                    const reader = new FileReader();
                    reader.onload = (e) => processFileContent(e.target.result, isKmz);
                    reader.readAsArrayBuffer(file);
                };

                const autoLoadKMZ = async (filename) => {
                    try {
                        console.log(`Otomatik yükleme başlatıldı: ${filename}`);
                        const response = await fetch(filename);
                        if (!response.ok) throw new Error('Dosya sunucuda bulunamadı.');
                        const buffer = await response.arrayBuffer();
                        await processFileContent(buffer, true);
                    } catch (err) {
                        console.warn('Auto-load KMZ failed:', err.message);
                    }
                };

                const openOcrMapModal = () => {
                    modals.value.ocrMap = true;
                    tempSelectedParcel.value = null;
                    nextTick(() => initOcrMap());
                };

                const confirmOcrMapSelection = () => {
                    modals.value.ocrMap = false;
                    showSuccess('Eşleşme Sağlandı', 'Parsel verisi form ile ilişkilendirildi.');
                };

                const saveAndGenerateDeed = () => {
                    // Create a robust property object from OCR form data
                    const newProp = {
                        id: 9999,
                        ada: ocrForm.value.property_number.split('/')[0] || '---',
                        parsel: ocrForm.value.property_number.split('/')[1] || '---',
                        location: (ocrForm.value.province || '---') + ' / ' + (ocrForm.value.district || '---'),
                        directorate: ocrForm.value.directorate || '---',
                        type: ocrForm.value.property_type || '---',
                        area_text: ocrForm.value.area_text || '---',
                        owner_name: ocrForm.value.owner_name || '---',
                        share_text: ocrForm.value.share_text || '---',
                        signature_date: ocrForm.value.signature_date || '---',
                        daily_register_no: ocrForm.value.daily_register_no || '---',
                        transaction_type: ocrForm.value.transaction_type || '---',
                        description: ocrForm.value.description || '---'
                    };

                    modals.value.activeProp = newProp;
                    modals.value.deed = true;
                    showSuccess('Kayıt Başarılı', 'Yeni tapu senedi oluşturuldu.');
                };

                const locateProperty = () => { /* implementation */ }; // simplified

                onMounted(() => {
                    setLang('ar');
                    // Sayfa açıldığında 13.kmz dosyasını otomatik yükle
                    setTimeout(() => autoLoadKMZ('13.kmz'), 1000);
                });

                return {
                    loading, loadingMsg, lang, t, isLoggedIn, loginCreds, loginProcessing, isMobileMenuOpen, loginRole,
                    currentTab, map, searchQuery, properties, modals, toast,
                    ocrImage, ocrScanning, ocrData, ocrForm, tempSelectedParcel, ocrInput,
                    viewerScale, viewerPanX, viewerPanY, viewerMode, isPanning, isSelecting, selectionRect, viewerContainer,
                    handleLogin, changeTab, getIcon, setLang, capitalize,
                    handleOcrUpload, openOcrPicker, handleFileUpload, openOcrMapModal, confirmOcrMapSelection, saveAndGenerateDeed, locateProperty,
                    resetViewer, handleViewerWheel, handleViewerMouseDown, handleViewerMouseMove, handleViewerMouseUp,
                    kmzLoading, mapStyle, showMapSettings
                };
            }
        }).mount('#app');
    