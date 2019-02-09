var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or '300'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "yes",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "no",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "no",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    ARM1553: {
      name: "Aragatsotn",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARM1554: {
      name: "Armavir"
    },
    ARM1555: {
      name: "Shirak"
    },
    ARM1670: {
      name: "Tavush"
    },
    ARM1671: {
      name: "Ararat"
    },
    ARM1672: {
      name: "Gegharkunik"
    },
    ARM1673: {
      name: "Kotayk"
    },
    ARM1674: {
      name: "Lori"
    },
    ARM1675: {
      name: "Erevan"
    },
    ARM1732: {
      name: "Syunik"
    },
    ARM1733: {
      name: "Vayots Dzor"
    }
  },
  locations: {
    "0": {
      lat: "40.181111",
      lng: "44.513611",
      name: "Yerevan"
    }
  }
};