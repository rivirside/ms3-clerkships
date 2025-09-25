// Clerkship locations data with blocks and specialties
const clerkshipLocations = [
    {
        name: "Abrazo Arrowhead Campus",
        address: "18701 N 67th Ave, Glendale, AZ 85308",
        lat: 33.6536,
        lng: -112.2097,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["internal-medicine", "surgery", "emergency-medicine"]
    },
    {
        name: "Advanced Cardiovascular Care of Yuma",
        address: "Yuma, AZ",
        lat: 32.6927,
        lng: -114.6277,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["internal-medicine"]
    },
    {
        name: "Affiliated Internal Medicine Clinic",
        address: "Phoenix, AZ",
        lat: 33.4484,
        lng: -112.0740,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["internal-medicine"]
    },
    {
        name: "Banner Boswell Medical Center",
        address: "10401 W Thunderbird Blvd, Sun City, AZ 85351",
        lat: 33.6103,
        lng: -112.3145,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["internal-medicine", "surgery", "emergency-medicine"]
    },
    {
        name: "Banner Del E Webb Medical Center",
        address: "14502 W Meeker Blvd, Sun City West, AZ 85375",
        lat: 33.6639,
        lng: -112.3781,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["internal-medicine", "surgery", "emergency-medicine"]
    },
    {
        name: "Banner Desert Medical Center",
        address: "1400 S Dobson Rd, Mesa, AZ 85202",
        lat: 33.3961,
        lng: -111.8731,
        blocks: ["internal-medicine-sub-block-a", "family-medicine"],
        specialties: ["internal-medicine", "surgery", "emergency-medicine", "pediatrics", "family-medicine"]
    },
    {
        name: "Banner Health Center plus",
        address: "Phoenix, AZ",
        lat: 33.4484,
        lng: -112.0740,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["family-medicine", "other"]
    },
    {
        name: "Banner University Medical Center - Ambulatory",
        address: "Phoenix, AZ",
        lat: 33.4484,
        lng: -112.0740,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["other"]
    },
    {
        name: "Banner University Medical Center - Phoenix",
        address: "1111 E McDowell Rd, Phoenix, AZ 85006",
        lat: 33.4651,
        lng: -112.0558,
        blocks: ["internal-medicine-sub-block-a", "neurology", "obstetrics-gynecology", "psychiatry", "family-medicine", "surgery-sub-block-b"],
        specialties: ["internal-medicine", "surgery", "emergency-medicine", "pediatrics", "obstetrics-gynecology", "neurology", "psychiatry", "family-medicine"]
    },
    {
        name: "HonorHealth Scottsdale Thompson Peak Medical Center",
        address: "7400 E Thompson Peak Pkwy, Scottsdale, AZ 85255",
        lat: 33.7581,
        lng: -111.9231,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["internal-medicine", "surgery", "emergency-medicine"]
    },
    {
        name: "Jomax Clinic - Ambulatory",
        address: "Phoenix, AZ",
        lat: 33.4484,
        lng: -112.0740,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["family-medicine"]
    },
    {
        name: "Mount Graham Regional Medical Center",
        address: "1600 S 20th Ave, Safford, AZ 85546",
        lat: 32.8340,
        lng: -109.7073,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["internal-medicine", "family-medicine", "emergency-medicine"]
    },
    {
        name: "Northern Arizona VA Health Care System",
        address: "500 Highway 89 North, Prescott, AZ 86313",
        lat: 34.5656,
        lng: -112.4681,
        blocks: ["internal-medicine-sub-block-a", "psychiatry"],
        specialties: ["internal-medicine", "psychiatry", "family-medicine"]
    },
    {
        name: "Phoenix VA Health Care System",
        address: "650 E Indian School Rd, Phoenix, AZ 85012",
        lat: 33.4942,
        lng: -112.0606,
        blocks: ["internal-medicine-sub-block-a", "neurology", "psychiatry"],
        specialties: ["internal-medicine", "psychiatry", "surgery", "neurology"]
    },
    {
        name: "Phoenix VA Health Care System – Ambulatory",
        address: "650 E Indian School Rd, Phoenix, AZ 85012",
        lat: 33.4942,
        lng: -112.0606,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["other"]
    },
    {
        name: "Silver Health Care Main Clinic & Urgent Care Clinic",
        address: "Phoenix, AZ",
        lat: 33.4484,
        lng: -112.0740,
        blocks: ["internal-medicine-sub-block-a"],
        specialties: ["family-medicine", "emergency-medicine"]
    },
    {
        name: "Summit Healthcare Hospitalist - Show Low",
        address: "2200 E Show Low Lake Rd, Show Low, AZ 85901",
        lat: 34.2542,
        lng: -110.0298,
        blocks: ["internal-medicine-sub-block-a", "pediatrics-outpatient"],
        specialties: ["internal-medicine", "family-medicine", "pediatrics"]
    },
    {
        name: "Tsehootsooi Medical Center",
        address: "Corner of Routes N12 & N7, Fort Defiance, AZ 86504",
        lat: 35.7447,
        lng: -109.0731,
        blocks: ["internal-medicine-sub-block-a", "pediatrics-outpatient", "family-medicine"],
        specialties: ["internal-medicine", "family-medicine", "pediatrics"]
    },
    {
        name: "Valleywise Health Medical Center",
        address: "2601 E Roosevelt St, Phoenix, AZ 85008",
        lat: 33.4594,
        lng: -112.0356,
        blocks: ["internal-medicine-sub-block-a", "obstetrics-gynecology", "pediatrics-inpatient", "psychiatry", "surgery-sub-block-b"],
        specialties: ["internal-medicine", "surgery", "emergency-medicine", "pediatrics", "obstetrics-gynecology", "psychiatry"]
    },
    {
        name: "Banner Baywood Medical Center",
        address: "6644 E Baywood Ave, Mesa, AZ 85206",
        lat: 33.3794,
        lng: -111.7340,
        blocks: ["neurology"],
        specialties: ["neurology", "internal-medicine", "surgery"]
    },
    {
        name: "Barrow Neurological Institute",
        address: "350 W Thomas Rd, Phoenix, AZ 85013",
        lat: 33.4806,
        lng: -112.0835,
        blocks: ["neurology"],
        specialties: ["neurology", "surgery"]
    },
    {
        name: "HonorHealth Neurology - Bob Bové Neuroscience Institute",
        address: "7242 E Osborn Rd, Scottsdale, AZ 85251",
        lat: 33.4892,
        lng: -111.9028,
        blocks: ["neurology"],
        specialties: ["neurology"]
    },
    {
        name: "Banner Estrella Medical Center",
        address: "9201 W Thomas Rd, Phoenix, AZ 85037",
        lat: 33.4806,
        lng: -112.2692,
        blocks: ["obstetrics-gynecology"],
        specialties: ["obstetrics-gynecology", "internal-medicine", "surgery", "emergency-medicine"]
    },
    {
        name: "Onvida Health Yuma Medical Center",
        address: "2400 S Avenue A, Yuma, AZ 85364",
        lat: 32.7097,
        lng: -114.6277,
        blocks: ["obstetrics-gynecology", "pediatrics-outpatient"],
        specialties: ["obstetrics-gynecology", "internal-medicine", "surgery", "emergency-medicine", "pediatrics"]
    },
    {
        name: "Tuba City Regional Health Care",
        address: "167 N Main St, Tuba City, AZ 86045",
        lat: 36.1247,
        lng: -111.2431,
        blocks: ["obstetrics-gynecology"],
        specialties: ["obstetrics-gynecology", "family-medicine", "internal-medicine"]
    },
    {
        name: "Banner Children's at Desert",
        address: "1400 S Dobson Rd, Mesa, AZ 85202",
        lat: 33.3961,
        lng: -111.8731,
        blocks: ["pediatrics-inpatient", "surgery-sub-block-b"],
        specialties: ["pediatrics", "surgery"]
    },
    {
        name: "Phoenix Children's Hospital - Inpatient",
        address: "1919 E Thomas Rd, Phoenix, AZ 85016",
        lat: 33.4806,
        lng: -112.0356,
        blocks: ["pediatrics-inpatient", "surgery-sub-block-b"],
        specialties: ["pediatrics", "surgery"]
    },
    {
        name: "Banner Children's - Banner Health Clinic",
        address: "1450 S Dobson Rd, Mesa, AZ 85202",
        lat: 33.3783,
        lng: -111.8731,
        blocks: ["pediatrics-outpatient"],
        specialties: ["pediatrics"]
    },
    {
        name: "Banner Health Center - Maricopa",
        address: "17900 N Porter Rd, Maricopa, AZ 85138",
        lat: 33.0583,
        lng: -112.0478,
        blocks: ["pediatrics-outpatient"],
        specialties: ["pediatrics", "family-medicine"]
    },
    {
        name: "Banner Health Center - Queen Creek",
        address: "21772 S Ellsworth Loop Rd, Queen Creek, AZ 85142",
        lat: 33.2486,
        lng: -111.6377,
        blocks: ["pediatrics-outpatient"],
        specialties: ["pediatrics", "family-medicine"]
    },
    {
        name: "Gila River Health Care Hu Hu Kam Memorial Hospital",
        address: "483 W Seed Farm Rd, Sacaton, AZ 85147",
        lat: 33.0772,
        lng: -111.9700,
        blocks: ["pediatrics-outpatient"],
        specialties: ["pediatrics", "family-medicine", "internal-medicine"]
    },
    {
        name: "North Country HealthCare - Winslow",
        address: "620 W Lee St, Winslow, AZ 86047",
        lat: 35.0242,
        lng: -110.6973,
        blocks: ["pediatrics-outpatient"],
        specialties: ["pediatrics", "family-medicine"]
    },
    {
        name: "Phoenix Children's Hospital - Outpatient",
        address: "1919 E Thomas Rd, Phoenix, AZ 85016",
        lat: 33.4806,
        lng: -112.0356,
        blocks: ["pediatrics-outpatient"],
        specialties: ["pediatrics"]
    },
    {
        name: "San Luis Walk-in Clinic",
        address: "1896 E Babbitt Ln, San Luis, AZ 85349",
        lat: 32.4875,
        lng: -114.7822,
        blocks: ["pediatrics-outpatient"],
        specialties: ["pediatrics", "family-medicine"]
    },
    {
        name: "Yavapai Regional Medical Center Ponderosa Pediatrics",
        address: "2120 Centerpointe West Dr, Prescott, AZ 86301",
        lat: 34.5400,
        lng: -112.4681,
        blocks: ["pediatrics-outpatient"],
        specialties: ["pediatrics"]
    },
    {
        name: "The Guidance Center",
        address: "2695 E Industrial Dr, Flagstaff, AZ 86004",
        lat: 35.1983,
        lng: -111.6513,
        blocks: ["psychiatry"],
        specialties: ["psychiatry"]
    },
    {
        name: "Banner Health Center - Buckeye",
        address: "20751 W Market St, Buckeye, AZ 85396",
        lat: 33.3705,
        lng: -112.5836,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "Gila Health Resources - Morenci",
        address: "401 Burro Alley, Morenci, AZ 85540",
        lat: 33.0439,
        lng: -109.3686,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "Healthy Life Family Medicine",
        address: "750 N Estrella Pkwy, Goodyear, AZ 85338",
        lat: 33.4503,
        lng: -112.3597,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "HonorHealth Heuser Family Medicine Center",
        address: "7301 E 2nd St, Scottsdale, AZ 85251",
        lat: 33.4892,
        lng: -111.9231,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "HonorHealth Medical Group - Gavilan Peak",
        address: "3648 W Anthem Way, Anthem, AZ 85086",
        lat: 33.6431,
        lng: -112.1831,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "Live Well Family Medicine",
        address: "2320 W Ray Rd, Chandler, AZ 85224",
        lat: 33.3319,
        lng: -111.9139,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "NACA Family Health Center Flagstaff",
        address: "1500 E Cedar Ave, Flagstaff, AZ 86004",
        lat: 35.1983,
        lng: -111.6251,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "NOAH Cholla Health Center",
        address: "8705 E McDowell Rd, Scottsdale, AZ 85257",
        lat: 33.4651,
        lng: -111.8906,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "North Country HealthCare Flagstaff",
        address: "2920 N 4th St, Flagstaff, AZ 86004",
        lat: 35.2269,
        lng: -111.6513,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "One Medical",
        address: "2201 E Camelback Rd, Phoenix, AZ 85016",
        lat: 33.5097,
        lng: -112.0356,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "Premier Mountain Healthcare",
        address: "5300 S Sutter Dr, Show Low, AZ 85901",
        lat: 34.2542,
        lng: -110.0298,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "Richard Covey MD PC",
        address: "3155 Stillwater Dr, Prescott, AZ 86305",
        lat: 34.5656,
        lng: -112.4681,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "Summit Healthcare - Snowflake",
        address: "1121 S Main St, Snowflake, AZ 85937",
        lat: 34.5133,
        lng: -110.0785,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "Village Medical - Desert Ridge",
        address: "4712 E Rose Garden Ln, Phoenix, AZ 85050",
        lat: 33.6781,
        lng: -111.9731,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "Wesley Community and Health Centers",
        address: "1625 N 39th Ave, Phoenix, AZ 85009",
        lat: 33.4581,
        lng: -112.1331,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "Yuma Regional Medical Center Family Medicine Center",
        address: "1965 W 24th St, Yuma, AZ 85364",
        lat: 32.6927,
        lng: -114.6277,
        blocks: ["family-medicine"],
        specialties: ["family-medicine"]
    },
    {
        name: "Arizona Transplant Associates",
        address: "2218 N 3rd St, Phoenix, AZ 85004",
        lat: 33.4806,
        lng: -112.0835,
        blocks: ["surgery-sub-block-b"],
        specialties: ["surgery"]
    },
    {
        name: "Banner Heart Hospital",
        address: "6750 E Baywood Ave, Mesa, AZ 85206",
        lat: 33.3794,
        lng: -111.7340,
        blocks: ["surgery-sub-block-b"],
        specialties: ["surgery"]
    },
    {
        name: "Banner MD Anderson Cancer Center - Gateway",
        address: "2946 E Banner Gateway Dr, Gilbert, AZ 85234",
        lat: 33.3486,
        lng: -111.7377,
        blocks: ["surgery-sub-block-b"],
        specialties: ["surgery"]
    },
    {
        name: "Phoenix Cardiac Surgery",
        address: "3131 E Clarendon Ave, Phoenix, AZ 85016",
        lat: 33.4892,
        lng: -112.0231,
        blocks: ["surgery-sub-block-b"],
        specialties: ["surgery"]
    },
    {
        name: "Vascular Surgery Specialists",
        address: "6040 N 7th St, Phoenix, AZ 85014",
        lat: 33.5097,
        lng: -112.0606,
        blocks: ["surgery-sub-block-b"],
        specialties: ["surgery"]
    }
];

// Block definitions
const blockDefinitions = {
    'internal-medicine-sub-block-a': {
        name: 'Internal Medicine Sub Block A',
        color: '#1E90FF'
    },
    'neurology': {
        name: 'Neurology',
        color: '#8A2BE2'
    },
    'obstetrics-gynecology': {
        name: 'OB/GYN',
        color: '#FF1493'
    },
    'pediatrics-inpatient': {
        name: 'Pediatrics - Inpatient',
        color: '#FF6347'
    },
    'pediatrics-outpatient': {
        name: 'Pediatrics - Outpatient',
        color: '#FFA500'
    },
    'psychiatry': {
        name: 'Psychiatry',
        color: '#9370DB'
    },
    'family-medicine': {
        name: 'Family Medicine',
        color: '#228B22'
    },
    'surgery-sub-block-b': {
        name: 'Surgery Sub-Block B',
        color: '#4169E1'
    },
    'internal-medicine-sub-block-b': {
        name: 'Internal Medicine Sub Block B',
        color: '#20B2AA'
    }
};

// Only using block-based filtering now

// Shortlists for each block (stores location names in preferred order)
const blockShortlists = {
    'internal-medicine-sub-block-a': [],
    'neurology': [],
    'obstetrics-gynecology': [],
    'pediatrics-inpatient': [],
    'pediatrics-outpatient': [],
    'psychiatry': [],
    'family-medicine': [],
    'surgery-sub-block-b': [],
    'internal-medicine-sub-block-b': []
};

// Initialize the map
let map;
let markers = [];

function initMap() {
    // Create map centered on Phoenix, Arizona
    map = L.map('map').setView([33.4484, -112.0740], 7);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for each location
    addMarkers();
    
    // Generate location list
    generateLocationList();
    
    // Setup event listeners
    setupEventListeners();
}

function addMarkers() {
    clerkshipLocations.forEach((location, index) => {
        // Determine marker color based on primary block
        const primaryBlock = location.blocks[0];
        const color = blockDefinitions[primaryBlock]?.color || '#708090';
        
        // Create custom marker
        const marker = L.circleMarker([location.lat, location.lng], {
            color: '#ffffff',
            weight: 2,
            fillColor: color,
            fillOpacity: 0.8,
            radius: 8
        }).addTo(map);

        // Create popup content
        const blocksText = location.blocks
            .map(b => blockDefinitions[b]?.name || b)
            .join(', ');
            
        const popupContent = `
            <div class="popup-content">
                <h4>${location.name}</h4>
                <p><strong>Address:</strong> ${location.address}</p>
                <p><strong>Blocks:</strong> ${blocksText}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        
        // Store marker with location data
        markers.push({
            marker: marker,
            location: location
        });
    });
}

function generateLocationList() {
    const container = document.getElementById('locations-container');
    container.innerHTML = ''; // Clear existing content
    
    clerkshipLocations.forEach(location => {
        const locationDiv = document.createElement('div');
        locationDiv.className = 'location-item';
        locationDiv.dataset.blocks = location.blocks.join(',');
        
        // Determine color based on primary block
        const primaryBlock = location.blocks[0];
        const primaryColor = blockDefinitions[primaryBlock]?.color || '#708090';
        
        const blocksText = location.blocks
            .map(b => blockDefinitions[b]?.name || b)
            .join(', ');
        
        // Generate unique location ID
        const locationId = `${location.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${location.lat}-${location.lng}`;
        locationDiv.dataset.locationId = locationId;
        
        locationDiv.innerHTML = `
            <div class="location-marker" style="background-color: ${primaryColor};"></div>
            <div class="location-info">
                <h4>${location.name}</h4>
                <p class="location-address">${location.address}</p>
                <p class="location-blocks">Blocks: ${blocksText}</p>
            </div>
            <div class="location-actions">
                <select class="shortlist-block-selector" onchange="updateShortlistButton(this, '${locationId}')">
                    <option value="">Select block...</option>
                    ${Object.keys(blockDefinitions).map(blockId => 
                        `<option value="${blockId}">${blockDefinitions[blockId].name}</option>`
                    ).join('')}
                </select>
                <button class="add-to-shortlist" onclick="addLocationToCurrentShortlist('${locationId}')" disabled>
                    Add to Shortlist
                </button>
            </div>
        `;
        
        // Add click handler to focus on map marker
        locationDiv.addEventListener('click', () => {
            map.setView([location.lat, location.lng], 12);
            const markerData = markers.find(m => m.location.name === location.name);
            if (markerData) {
                markerData.marker.openPopup();
            }
        });
        
        container.appendChild(locationDiv);
    });
}

function setupEventListeners() {
    // Block toggle checkboxes
    const blockCheckboxes = document.querySelectorAll('.block-toggles input[type="checkbox"]');
    blockCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterMarkers);
    });
    
    // Show/Hide all buttons
    document.getElementById('show-all').addEventListener('click', () => {
        document.querySelectorAll('.block-toggles input[type="checkbox"]').forEach(cb => cb.checked = true);
        filterMarkers();
    });
    
    document.getElementById('hide-all').addEventListener('click', () => {
        document.querySelectorAll('.block-toggles input[type="checkbox"]').forEach(cb => cb.checked = false);
        filterMarkers();
    });
}



function filterMarkers() {
    // Get active block filters
    const activeFilters = Array.from(document.querySelectorAll('.block-toggles input:checked'))
        .map(input => input.id);
    
    // Filter map markers
    markers.forEach(markerData => {
        const shouldShow = markerData.location.blocks.some(block => 
            activeFilters.includes(block)
        );
        
        if (shouldShow) {
            map.addLayer(markerData.marker);
        } else {
            map.removeLayer(markerData.marker);
        }
    });
    
    // Filter location list
    const locationItems = document.querySelectorAll('.location-item');
    locationItems.forEach(item => {
        const itemBlocks = item.dataset.blocks.split(',');
        const shouldShow = itemBlocks.some(block => activeFilters.includes(block));
        item.style.display = shouldShow ? 'flex' : 'none';
    });
}

// Shortlist functionality
let currentShortlistBlock = 'internal-medicine-sub-block-a';

function initShortlists() {
    // Initialize shortlist tab functionality
    const shortlistTabs = document.querySelectorAll('.shortlist-tab-btn');
    shortlistTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const blockId = e.target.dataset.block;
            switchShortlistTab(blockId);
        });
    });
}

function switchShortlistTab(blockId) {
    // Update active tab
    document.querySelectorAll('.shortlist-tab-btn').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-block="${blockId}"]`).classList.add('active');
    
    // Show corresponding shortlist content
    document.querySelectorAll('.shortlist-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`shortlist-${blockId}`).classList.add('active');
    
    currentShortlistBlock = blockId;
    renderShortlist(blockId);
}

function addToShortlist(locationId, blockId) {
    if (!blockShortlists[blockId].includes(locationId)) {
        blockShortlists[blockId].push(locationId);
        renderShortlist(blockId);
        
        // Update the button text if it's for the currently active shortlist
        if (blockId === currentShortlistBlock) {
            const addBtn = document.querySelector(`[data-location-id="${locationId}"] .add-to-shortlist`);
            if (addBtn) {
                addBtn.textContent = 'Remove from Shortlist';
                addBtn.classList.add('in-shortlist');
            }
        }
    } else {
        // Remove from shortlist
        blockShortlists[blockId] = blockShortlists[blockId].filter(id => id !== locationId);
        renderShortlist(blockId);
        
        // Update the button text
        const addBtn = document.querySelector(`[data-location-id="${locationId}"] .add-to-shortlist`);
        if (addBtn) {
            addBtn.textContent = 'Add to Shortlist';
            addBtn.classList.remove('in-shortlist');
        }
    }
}

function renderShortlist(blockId) {
    const shortlistContainer = document.querySelector(`.shortlist-list[data-block="${blockId}"]`);
    if (!shortlistContainer) return;
    
    shortlistContainer.innerHTML = '';
    
    blockShortlists[blockId].forEach((locationId, index) => {
        const location = clerkshipLocations.find(loc => 
            `${loc.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${loc.lat}-${loc.lng}` === locationId
        );
        
        if (location) {
            const li = document.createElement('li');
            li.className = 'shortlist-item';
            li.draggable = true;
            li.dataset.locationId = locationId;
            li.innerHTML = `
                <div class="shortlist-rank">${index + 1}</div>
                <div class="shortlist-location-info">
                    <div class="shortlist-location-name">${location.name}</div>
                    <div class="shortlist-location-address">${location.address}</div>
                </div>
                <button class="remove-from-shortlist" onclick="addToShortlist('${locationId}', '${blockId}')">×</button>
            `;
            shortlistContainer.appendChild(li);
        }
    });
    
    // Add drag and drop functionality
    initDragAndDrop(shortlistContainer, blockId);
}

function initDragAndDrop(container, blockId) {
    let draggedElement = null;
    
    container.addEventListener('dragstart', (e) => {
        draggedElement = e.target.closest('.shortlist-item');
        e.target.classList.add('dragging');
    });
    
    container.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
        draggedElement = null;
    });
    
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingItem = container.querySelector('.dragging');
        const siblings = [...container.querySelectorAll('.shortlist-item:not(.dragging)')];
        
        const nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.getBoundingClientRect().top + sibling.offsetHeight / 2;
        });
        
        container.insertBefore(draggingItem, nextSibling);
    });
    
    container.addEventListener('drop', (e) => {
        e.preventDefault();
        // Update the shortlist array based on new order
        const newOrder = [...container.querySelectorAll('.shortlist-item')].map(item => 
            item.dataset.locationId
        );
        blockShortlists[blockId] = newOrder;
        
        // Re-render to update rank numbers
        renderShortlist(blockId);
    });
}

function updateShortlistButton(selectElement, locationId) {
    const button = selectElement.nextElementSibling;
    const selectedBlock = selectElement.value;
    
    if (selectedBlock) {
        button.disabled = false;
        button.onclick = () => addToShortlist(locationId, selectedBlock);
        
        // Update button text based on whether location is already in shortlist
        if (blockShortlists[selectedBlock].includes(locationId)) {
            button.textContent = 'Remove from Shortlist';
            button.classList.add('in-shortlist');
        } else {
            button.textContent = 'Add to Shortlist';
            button.classList.remove('in-shortlist');
        }
    } else {
        button.disabled = true;
        button.textContent = 'Add to Shortlist';
        button.classList.remove('in-shortlist');
    }
}

function addLocationToCurrentShortlist(locationId) {
    // This function is kept for backwards compatibility but shouldn't be called
    // since we're using the block selector approach now
    console.warn('addLocationToCurrentShortlist called - this should not happen');
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initShortlists();
});