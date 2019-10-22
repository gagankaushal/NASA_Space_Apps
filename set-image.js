/* global AFRAME */

var venus = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90ad8232-4e09-4675-b9e7-bc2898960870/dc0ss1u-9ce1cbd0-6f56-4bb1-ab24-e64089914504.png/v1/fill/w_1024,h_512,q_80,strp/venus_cloud_texture_map_by_jcpag2010_dc0ss1u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvOTBhZDgyMzItNGUwOS00Njc1LWI5ZTctYmMyODk4OTYwODcwXC9kYzBzczF1LTljZTFjYmQwLTZmNTYtNGJiMS1hYjI0LWU2NDA4OTkxNDUwNC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.W_cmzd6frwnuf_p4_K40ME9cIai41bgUtrIImysmwaM";
var earth = "https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fearthmap1k.jpg?1541102064615";
var mars = "https://vignette.wikia.nocookie.net/planet-texture-maps/images/1/19/Mars_Map.png/revision/latest/scale-to-width-down/451?cb=20190402042909";
var jupiter = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Jupiter_Map_%28badly_processed%29.jpg";

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-white', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var earth = document.querySelector('#earth-and-moon');
    var earth_orbit = document.querySelector('#orbit-ring');
    var habitable_zone_inner = document.querySelector('#habitable-zone-inner');
    var habitable_zone_outer = document.querySelector('#habitable-zone-outer');
    var sun_light = document.querySelector('#sun-light');
    var earth_container = document.querySelector('#earth');
    var moon = document.querySelector('#moon');
    var solar_system = document.querySelector('#solar-system');
    var planet_text = document.querySelector('#planet-text');
    var star_text = document.querySelector('#star-text');
    
    el.addEventListener(data.on, function () {
      data.target.setAttribute('material', "shader:star; starCol: 2;", data.src);
      earth.setAttribute('position', {x:0,y:0,z:22});
      habitable_zone_inner.setAttribute('geometry', "primitive: cylinder; height: .05; radius: 20.5; openEnded: true");
      habitable_zone_outer.setAttribute('geometry', "primitive: cylinder; height: .05; radius: 23.5; openEnded: true");
      earth_orbit.setAttribute('geometry', "primitive: torus; radius: 10.99; radiusTubular: 0.01;segmentsTubular: 50");
      var rotation_speed = earth.object3D.position.z * 2000;
      solar_system.setAttribute('animation', "dur:" + rotation_speed);
      planet_text.setAttribute('animation', "dur:" + rotation_speed);
      planet_text.setAttribute('text', 'value:Just Right: The habitable zone also known as the "Goldilocks zone" is the perfect area in which a planet is at the right orbit to support liquid water. Here the planet is not too warm to vaporize water and not too cold to freeze it. It is important that to support life a planet must have its entire orbit in this habitable zone.');
      sun_light.setAttribute('color', 'white');
      data.target.setAttribute('radius', "2", data.src);
      star_text.object3D.position.y = 6;
      star_text.setAttribute('text', 'value:Vega: At 25 light years away, it is the 6th star closest to our Sun and the brightest of the Lyra constellation with a surface temperature of 9770K and a mass equivalent to 2.1x our Sun. White light is emitted during the star’s fusion. After its outer layers dissipate, Vega will eventually evolve to a white dwarf.');
      earth_container.setAttribute('radius', .5);
      moon.object3D.position.x = -1;
      earth_container.setAttribute('src', "https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fearthmap1k.jpg?1541102064615");        
    });
  },
});

AFRAME.registerComponent('set-orange', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var earth = document.querySelector('#earth-and-moon');
    var earth_orbit = document.querySelector('#orbit-ring');
    var habitable_zone_inner = document.querySelector('#habitable-zone-inner');
    var habitable_zone_outer = document.querySelector('#habitable-zone-outer');
    var sun_light = document.querySelector('#sun-light');
    var solar_system = document.querySelector('#solar-system');
    var earth_container = document.querySelector('#earth');
    var moon = document.querySelector('#moon');
    var planet_text = document.querySelector('#planet-text');
    var star_text = document.querySelector('#star-text');
    console.log(star_text);
    
    el.addEventListener(data.on, function () {
      data.target.setAttribute('material', "shader:star; starCol: 3;", data.src);
      earth.setAttribute('position', {x:0,y:0,z:14});
      habitable_zone_inner.setAttribute('geometry', "primitive: cylinder; height: .05; radius: 12.5; openEnded: true");
      habitable_zone_outer.setAttribute('geometry', "primitive: cylinder; height: .05; radius: 15.5; openEnded: true");
      earth_orbit.setAttribute('geometry', "primitive: torus; radius: 6.99; radiusTubular: 0.01;segmentsTubular: 50");
      var rotation_speed = earth.object3D.position.z * 2000;
      solar_system.setAttribute('animation', "dur:" + rotation_speed);
      planet_text.setAttribute('animation', "dur:" + rotation_speed);
      planet_text.setAttribute('text', 'value:Just Right: The habitable zone also known as the "Goldilocks zone" is the perfect area in which a planet is at the right orbit to support liquid water. Here the planet is not too warm to vaporize water and not too cold to freeze it. It is important that to support life a planet must have its entire orbit in this habitable zone.');
      sun_light.setAttribute('color', 'orange');
      data.target.setAttribute('radius', "4", data.src);
      star_text.object3D.position.y = 8;
      star_text.setAttribute('text', 'value:Aldebaran: Aldebaran A is an orange-red giant star and the brightest star is the consolation Taurus. It has a solar mass of roughly 1.25x our sun and a surface temperature of 3900K. Aldebaran has evolved from the main sequence stage of its life cycle and exhausted the supply of hydrogen fuel in its core.');
      earth_container.setAttribute('radius', .5);
      moon.object3D.position.x = -1;
      earth_container.setAttribute('src', "https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fearthmap1k.jpg?1541102064615");        
    });
  },
});

AFRAME.registerComponent('set-blue', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var earth = document.querySelector('#earth-and-moon');
    var earth_orbit = document.querySelector('#orbit-ring');
    var habitable_zone_inner = document.querySelector('#habitable-zone-inner');
    var habitable_zone_outer = document.querySelector('#habitable-zone-outer');
    var sun_light = document.querySelector('#sun-light');
    var solar_system = document.querySelector('#solar-system');
    var earth_container = document.querySelector('#earth');
    var moon = document.querySelector('#moon');
    var planet_text = document.querySelector('#planet-text');
    var star_text = document.querySelector('#star-text');

    el.addEventListener(data.on, function () {
      data.target.setAttribute('material', "shader:star; starCol: 1;", data.src);
      earth.setAttribute('position', {x:0,y:0,z:24});
      habitable_zone_inner.setAttribute('geometry', "primitive: cylinder; height: .05; radius: 22.5; openEnded: true");
      habitable_zone_outer.setAttribute('geometry', "primitive: cylinder; height: .05; radius: 25.5; openEnded: true");
      var rotation_speed = earth.object3D.position.z * 2000;
      solar_system.setAttribute('animation', "dur:" + rotation_speed);
      planet_text.setAttribute('animation', "dur:" + rotation_speed);
      planet_text.setAttribute('text', 'value:Just Right: The habitable zone also known as the "Goldilocks zone" is the perfect area in which a planet is at the right orbit to support liquid water. Here the planet is not too warm to vaporize water and not too cold to freeze it. It is important that to support life a planet must have its entire orbit in this habitable zone.');
      earth_orbit.setAttribute('geometry', "primitive: torus; radius: 11.99; radiusTubular: 0.01;segmentsTubular: 50");
      sun_light.setAttribute('color', 'blue');
      data.target.setAttribute('radius', "6", data.src);
      star_text.object3D.position.y = 10;
      star_text.setAttribute('text', 'value:Rigel: Rigel is a blue super-giant. The brightest star in that constellation of Orion. Its brightness varies slightly, and it is occasionally outshone by Betelgeuse, itself a semi-regular variable star. It has a surface temperature of 11000K and a mass equivalent to 21x Our Sun. One day, it is expected transform into a super nova.');
      earth_container.setAttribute('radius', .5);
      moon.object3D.position.x = -1;
      earth_container.setAttribute('src', "https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fearthmap1k.jpg?1541102064615");        
    });
  },
});

AFRAME.registerComponent('set-red', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var earth = document.querySelector('#earth-and-moon');
    var earth_orbit = document.querySelector('#orbit-ring');
    var habitable_zone_inner = document.querySelector('#habitable-zone-inner');
    var habitable_zone_outer = document.querySelector('#habitable-zone-outer');
    var solar_system = document.querySelector('#solar-system');
    var sun_light = document.querySelector('#sun-light');
    var earth_container = document.querySelector('#earth');
    var moon = document.querySelector('#moon');
    var planet_text = document.querySelector('#planet-text');
    var star_text = document.querySelector('#star-text');
    
    el.addEventListener(data.on, function () {
      data.target.setAttribute('material', "shader:star; starCol: 0;", data.src);
      earth.setAttribute('position', {x:0,y:0,z:20});
      habitable_zone_inner.setAttribute('geometry', "primitive: cylinder; height: .05; radius: 18.5; openEnded: true");
      habitable_zone_outer.setAttribute('geometry', "primitive: cylinder; height: .05; radius: 21.5; openEnded: true");
      var rotation_speed = earth.object3D.position.z * 2000;
      solar_system.setAttribute('animation', "dur:" + rotation_speed);
      planet_text.setAttribute('animation', "dur:" + rotation_speed);
      planet_text.setAttribute('text', 'value:Just Right: The habitable zone also known as the "Goldilocks zone" is the perfect area in which a planet is at the right orbit to support liquid water. Here the planet is not too warm to vaporize water and not too cold to freeze it. It is important that to support life a planet must have its entire orbit in this habitable zone.');
      earth_orbit.setAttribute('geometry', "primitive: torus; radius: 9.99; radiusTubular: 0.01;segmentsTubular: 50");
      sun_light.setAttribute('color', 'red');
      data.target.setAttribute('radius', "8", data.src);
      star_text.object3D.position.y = 12;
      star_text.setAttribute('text', 'value:Betelgeuse: Betelgeuse has a surface temperature of 3500K and a mass equivalent to 18x our sun. Classified as a red super-giant, the star has a huge volume expanding if put into reference with our solar system to encompass everything within Jupiter’s orbit.');
      earth_container.setAttribute('radius', .5);
      moon.object3D.position.x = -1;
      earth_container.setAttribute('src', "https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fearthmap1k.jpg?1541102064615");        
    });
  },
});

AFRAME.registerComponent('set-increase', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var earth = document.querySelector('#earth-and-moon');
    var earth_orbit = document.querySelector('#orbit-ring');
    var earth_container = document.querySelector('#earth');
    var moon = document.querySelector('#moon');
    var solar_system = document.querySelector('#solar-system');
    var habitable_zone_inner = document.querySelector('#habitable-zone-inner');
    var habitable_zone_outer = document.querySelector('#habitable-zone-outer');
    var planet_text = document.querySelector('#planet-text');
    
    el.addEventListener(data.on, function () {
      earth.object3D.position.z += 2;
      earth_orbit.setAttribute('geometry', "primitive: torus; radius: " + (earth.object3D.position.z / 2) + "; radiusTubular: 0.01;segmentsTubular: 50");
      var rotation_speed = earth.object3D.position.z * 2000;
      solar_system.setAttribute('animation', "dur:" + rotation_speed);
      planet_text.setAttribute('animation', "dur:" + rotation_speed);
      
      var venus_radius = habitable_zone_inner.getAttribute('geometry').radius;
      var mars_radius = habitable_zone_outer.getAttribute('geometry').radius;
      var jupiter_radius = mars_radius * 2;
      
      if (earth.object3D.position.z > jupiter_radius) {
        earth_container.setAttribute('src', jupiter);
        earth_container.setAttribute('radius', 1);
        planet_text.setAttribute('text', 'value:Gas Giant: A gas giant is a large planet composed mostly of gases, such as hydrogen and helium, with a relatively small rocky core. The gas giants of our solar system are Jupiter, Saturn, Uranus and Neptune.');
        moon.object3D.position.x = -2;
      } else if (earth.object3D.position.z > mars_radius) {
        earth_container.setAttribute('src', mars);   
        earth_container.setAttribute('radius', .5);
        planet_text.setAttribute('text', 'value:Too Far from Sun: Planets too far from the sun experience a lack of thermal energy received from the sun and thus experience temperatures that cannot support liquid water. Life is uninhabitable here.');
        moon.object3D.position.x = -1;
      } else if (earth.object3D.position.z > venus_radius) {
        earth_container.setAttribute('src', "https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fearthmap1k.jpg?1541102064615");
        earth_container.setAttribute('radius', .5);
        planet_text.setAttribute('text', 'value:Just Right: The habitable zone also known as the "Goldilocks zone" is the perfect area in which a planet is at the right orbit to support liquid water. Here the planet is not too warm to vaporize water and not too cold to freeze it. It is important that to support life a planet must have its entire orbit in this habitable zone.');
        moon.object3D.position.x = -1;
      } else {
        earth_container.setAttribute('src', venus);  
        earth_container.setAttribute('radius', .5);
        planet_text.setAttribute('text', 'value:Too Close to the Sun: Planets too close to the sun experience much too high temperatures to support water, water turns to vapor and the planet is saturated with solar radiation. Life is uninhabitable here.');
        moon.object3D.position.x = -1;
      }
    });
  },
});

AFRAME.registerComponent('set-decrease', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var earth = document.querySelector('#earth-and-moon');
    var earth_container = document.querySelector('#earth');
    var moon = document.querySelector('#moon');
    var earth_orbit = document.querySelector('#orbit-ring');
    var solar_system = document.querySelector('#solar-system');
    var habitable_zone_inner = document.querySelector('#habitable-zone-inner');
    var habitable_zone_outer = document.querySelector('#habitable-zone-outer');
    var planet_text = document.querySelector('#planet-text');
    
    el.addEventListener(data.on, function () {
      earth.object3D.position.z -= 2;
      earth_orbit.setAttribute('geometry', "primitive: torus; radius: " + (earth.object3D.position.z / 2) + "; radiusTubular: 0.01;segmentsTubular: 50");
      var rotation_speed = earth.object3D.position.z * 2000;
      solar_system.setAttribute('animation', "dur:" + rotation_speed);
      planet_text.setAttribute('animation', "dur:" + rotation_speed);
      
      var venus_radius = habitable_zone_inner.getAttribute('geometry').radius;
      var mars_radius = habitable_zone_outer.getAttribute('geometry').radius;
      var jupiter_radius = mars_radius * 2;

      if (earth.object3D.position.z < venus_radius) {
        earth_container.setAttribute('src', venus);
        earth_container.setAttribute('radius', .5);
        planet_text.setAttribute('text', 'value:Too Close to the Sun: Planets too close to the sun experience much too high temperatures to support water, water turns to vapor and the planet is saturated with solar radiation. Life is uninhabitable here.');
        moon.object3D.position.x = -1;
      } else if (earth.object3D.position.z < mars_radius) {
        earth_container.setAttribute('src', "https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fearthmap1k.jpg?1541102064615"); 
        earth_container.setAttribute('radius', .5);
        planet_text.setAttribute('text', 'value:Just Right: The habitable zone also known as the "Goldilocks zone" is the perfect area in which a planet is at the right orbit to support liquid water. Here the planet is not too warm to vaporize water and not too cold to freeze it. It is important that to support life a planet must have its entire orbit in this habitable zone.');
        moon.object3D.position.x = -1;
      } else if (earth.object3D.position.z < jupiter_radius) {
        earth_container.setAttribute('src', mars);
        earth_container.setAttribute('radius', .5);
        planet_text.setAttribute('text', 'value:Too Far from Sun: Planets too far from the sun experience a lack of thermal energy received from the sun and thus experience temperatures that cannot support liquid water. Life is uninhabitable here.');
        moon.object3D.position.x = -1;
      } else {
        earth_container.setAttribute('src', jupiter);     
        earth_container.setAttribute('radius', 1);
        planet_text.setAttribute('text', 'value:Gas Giant: A gas giant is a large planet composed mostly of gases, such as hydrogen and helium, with a relatively small rocky core. The gas giants of our solar system are Jupiter, Saturn, Uranus and Neptune.');
        moon.object3D.position.x = -2;
      }
    });
  },
});