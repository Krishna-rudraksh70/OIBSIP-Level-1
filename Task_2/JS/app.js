$(document).ready(function(){
    var responseNavActive = false;
    var navham = document.getElementById("nav-ham");
    var navbar = document.getElementById("nav-bar");

    $("#nav-ham").click(function(){
        if (!responseNavActive){
            responseNavActive = true;

            navham.classList.add("nav-ham-active");
            navbar.classList.add("nav-bar-active");
        } else{
            responseNavActive = false;

            navham.classList.remove("nav-ham-active");
            navbar.classList.remove("nav-bar-active");
        }
    });

    var navlinks = document.getElementsByClassName("nav-link");
    for(var i=0; i<navlinks.length; i++){
        navlinks[i].addEventListener('click', function(){
            responseNavActive = false;

            navham.classList.remove("nav-ham-active");
            navbar.classList.remove("nav-bar-active");
        });
    }

    let bgSwitched = false;
    $("#bg-switcher").click(function(){
        bgSwitched = !bgSwitched;
        if (bgSwitched){
            $("#bg-switcher").addClass("switched");
            $("#home").addClass("switched");
        } else {
            $("#bg-switcher").removeClass("switched");
            $("#home").removeClass("switched");
        }
    });


    var langs = document.getElementById('skills-l');
    var webd = document.getElementById('skills-w');
    var ml = document.getElementById('skills-m');
    var tech = document.getElementById('skills-t');

    var langsbtn = document.getElementById('lang');
    var webdbtn = document.getElementById('webd');
    var mlbtn = document.getElementById('ml');
    var techbtn = document.getElementById('tech');

    $('#lang').click(function(){   
        langs.classList.add('active');
        langsbtn.classList.add('active');

        webd.classList.remove('active');
        ml.classList.remove('active');
        tech.classList.remove('active');
        webdbtn.classList.remove('active');
        mlbtn.classList.remove('active');
        techbtn.classList.remove('active');
    });

    $('#webd').click(function(){   
        webd.classList.add('active');
        webdbtn.classList.add('active');

        langs.classList.remove('active');
        ml.classList.remove('active');
        tech.classList.remove('active');

        langsbtn.classList.remove('active');
        mlbtn.classList.remove('active');
        techbtn.classList.remove('active');
    });

    $('#ml').click(function(){   
        ml.classList.add('active');
        mlbtn.classList.add('active');

        langs.classList.remove('active');
        tech.classList.remove('active');
        webd.classList.remove('active');

        langsbtn.classList.remove('active');
        techbtn.classList.remove('active');
        webdbtn.classList.remove('active');
    });

    $('#tech').click(function(){   
        tech.classList.add('active');
        techbtn.classList.add('active');

        langs.classList.remove('active');
        webd.classList.remove('active');
        ml.classList.remove('active');

        langsbtn.classList.remove('active');
        webdbtn.classList.remove('active');
        mlbtn.classList.remove('active');
    });


    var entriesL = [  {target: '_top',url: '#about', label: 'Terminal'}, {target: '_top',url: '#about', label: 'Pycharm'},  {target: '_top',url: '#about', label: 'VS Code'},  {target: '_top',url: '#about', label: 'Jupyter Notebook'}, {target: '_top',url: '#about', label: 'Vim'}, {target: '_top',url: '#about', label: 'Git'},  {target: '_top',url: '#about', label: 'Github'}, {target: '_top',url: '#about', label: 'Javascript'},  {target: '_top',url: '#about', label: 'Python'},  {target: '_top',url: '#about', label: 'PHP'},  {target: '_top',url: '#about', label: 'Go'},  {target: '_top',url: '#about', label: 'SQL'},  {target: '_top',url: '#about', label: 'API'}, {target: '_top',url: '#about', label: 'Object Oriented Programming'},   {target: '_top',url: '#about', label: 'C++'},  {target: '_top',url: '#about', label: 'C'},  {target: '_top',url: '#about', label: 'Data Structures'},  {target: '_top',url: '#about', label: 'Algorithms'},  {target: '_top',url: '#about', label: 'Batch Scripting'},  {target: '_top',url: '#about', label: 'JSON'}, ];
    var entriesW = [  {target: '_top',url: '#about', label: 'HTML'},  {target: '_top',url: '#about', label: 'CSS'},  {target: '_top',url: '#about', label: 'SASS'},  {target: '_top',url: '#about', label: 'JQuery'},  {target: '_top',url: '#about', label: 'PHP'},  {target: '_top',url: '#about', label: 'Ajax'},  {target: '_top',url: '#about', label: 'ReactJS'},  {target: '_top',url: '#about', label: 'Bootstrap'}, {target: '_top',url: '#about', label: 'Django'},  {target: '_top',url: '#about', label: 'MySql'},  {target: '_top',url: '#about', label: 'MongoDB'},  {target: '_top',url: '#about', label: 'Flask'},  {target: '_top',url: '#about', label: 'Responsive Design'},  {target: '_top',url: '#about', label: 'MVC model'},];
    var entriesM = [  {target: '_top',url: '#about', label: 'Regression'},  {target: '_top',url: '#about', label: 'Classification'},  {target: '_top',url: '#about', label: 'Tensorflow'},  {target: '_top',url: '#about', label: 'Scikit Learn'},  {target: '_top',url: '#about', label: 'Numpy'},  {target: '_top',url: '#about', label: 'Pandas'},  {target: '_top',url: '#about', label: 'Matplotlib'},  {target: '_top',url: '#about', label: 'Seaborn'},  {target: '_top',url: '#about', label: 'Convulational NN'},];
    var entriesT = [  {target: '_top',url: '#about', label: 'PyGame'}, {target: '_top',url: '#about', label: 'Tkinter'},  {target: '_top',url: '#about', label: 'Turtle Graphics'},  {target: '_top',url: '#about', label: 'Scrapy'},  {target: '_top',url: '#about', label: 'Exception Handling'},  {target: '_top',url: '#about', label: 'Beautiful Soup'},  {target: '_top',url: '#about', label: 'OpenCV'},  {target: '_top',url: '#about', label:'Selenium'}, {target: '_top',url: '#about', label:'Requests'}];

    
    rval = document.getElementById('r-set');
    gval = document.getElementById('g-set');
    bval = document.getElementById('b-set');

    var color = `rgb(${rval.value}, ${gval.value}, ${bval.value})`;

    var settingsL =  { entries: entriesL, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
    var settingsW =  { entries: entriesW, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
    var settingsM =  { entries: entriesM, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
    var settingsT =  { entries: entriesT, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };

    $("#skills-l").svg3DTagCloud(settingsL);
    $("#skills-w").svg3DTagCloud(settingsW);
    $("#skills-m").svg3DTagCloud(settingsM);
    $("#skills-t").svg3DTagCloud(settingsT);

    var skillcont = document.getElementById('skills-cont');

    rval.oninput = function(){
        color = `rgb(${this.value}, ${gval.value}, ${bval.value})`;
        document.documentElement.style.setProperty('--color-primary',color);
        document.documentElement.style.setProperty('--color-primaryrgba',`${this.value}, ${gval.value}, ${bval.value}`);
        
        settingsL =  { entries: entriesL, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsW =  { entries: entriesW, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsM =  { entries: entriesM, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsT =  { entries: entriesT, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };

        langs.innerHtml = '';
        webd.innerHtml = '';
        ml.innerHtml = '';
        tech.innerHtml = '';

        langs.parentNode.removeChild(langs);
        webd.parentNode.removeChild(webd);
        ml.parentNode.removeChild(ml);
        tech.parentNode.removeChild(tech);

        langsbtn.classList.add('active');
        webdbtn.classList.remove('active');
        mlbtn.classList.remove('active');
        techbtn.classList.remove('active');

        langs = document.createElement('div'); langs.setAttribute('id', 'skills-l'); langs.setAttribute('class', 'skills-cloud active');
        webd = document.createElement('div'); webd.setAttribute('id', 'skills-w'); webd.setAttribute('class', 'skills-cloud');
        ml = document.createElement('div'); ml.setAttribute('id', 'skills-m'); ml.setAttribute('class', 'skills-cloud');
        tech = document.createElement('div'); tech.setAttribute('id', 'skills-t'); tech.setAttribute('class', 'skills-cloud');

        skillcont.appendChild(langs);
        skillcont.appendChild(webd);
        skillcont.appendChild(ml);
        skillcont.appendChild(tech);

        
        
        $("#skills-l").svg3DTagCloud(settingsL);
        $("#skills-w").svg3DTagCloud(settingsW);
        $("#skills-m").svg3DTagCloud(settingsM);
        $("#skills-t").svg3DTagCloud(settingsT);
        
    }

    gval.oninput = function(){
        color = `rgb(${rval.value}, ${this.value}, ${bval.value})`;
        document.documentElement.style.setProperty('--color-primary',color);
        document.documentElement.style.setProperty('--color-primaryrgba',`${rval.value}, ${this.value}, ${bval.value}`);
            
        settingsL =  { entries: entriesL, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsW =  { entries: entriesW, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsM =  { entries: entriesM, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsT =  { entries: entriesT, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        
        langs.innerHtml = '';
        webd.innerHtml = '';
        ml.innerHtml = '';
        tech.innerHtml = '';

        langs.parentNode.removeChild(langs);
        webd.parentNode.removeChild(webd);
        ml.parentNode.removeChild(ml);
        tech.parentNode.removeChild(tech);

        langsbtn.classList.add('active');
        webdbtn.classList.remove('active');
        mlbtn.classList.remove('active');
        techbtn.classList.remove('active');

        langs = document.createElement('div'); langs.setAttribute('id', 'skills-l'); langs.setAttribute('class', 'skills-cloud active');
        webd = document.createElement('div'); webd.setAttribute('id', 'skills-w'); webd.setAttribute('class', 'skills-cloud');
        ml = document.createElement('div'); ml.setAttribute('id', 'skills-m'); ml.setAttribute('class', 'skills-cloud');
        tech = document.createElement('div'); tech.setAttribute('id', 'skills-t'); tech.setAttribute('class', 'skills-cloud');

        skillcont.appendChild(langs);
        skillcont.appendChild(webd);
        skillcont.appendChild(ml);
        skillcont.appendChild(tech);

        
        $("#skills-l").svg3DTagCloud(settingsL);
        $("#skills-w").svg3DTagCloud(settingsW);
        $("#skills-m").svg3DTagCloud(settingsM);
        $("#skills-t").svg3DTagCloud(settingsT);
    }

    bval.oninput = function(){
        color = `rgb(${rval.value}, ${gval.value}, ${this.value})`;
        document.documentElement.style.setProperty('--color-primary',color);
        document.documentElement.style.setProperty('--color-primaryrgba',`${rval.value}, ${gval.value}, ${this.value}`);
        
        settingsL =  { entries: entriesL, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsW =  { entries: entriesW, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsM =  { entries: entriesM, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsT =  { entries: entriesT, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };

        langs.innerHtml = '';
        webd.innerHtml = '';
        ml.innerHtml = '';
        tech.innerHtml = '';

        langs.parentNode.removeChild(langs);
        webd.parentNode.removeChild(webd);
        ml.parentNode.removeChild(ml);
        tech.parentNode.removeChild(tech);

        langsbtn.classList.add('active');
        webdbtn.classList.remove('active');
        mlbtn.classList.remove('active');
        techbtn.classList.remove('active');

        langs = document.createElement('div'); langs.setAttribute('id', 'skills-l'); langs.setAttribute('class', 'skills-cloud active');
        webd = document.createElement('div'); webd.setAttribute('id', 'skills-w'); webd.setAttribute('class', 'skills-cloud');
        ml = document.createElement('div'); ml.setAttribute('id', 'skills-m'); ml.setAttribute('class', 'skills-cloud');
        tech = document.createElement('div'); tech.setAttribute('id', 'skills-t'); tech.setAttribute('class', 'skills-cloud');

        skillcont.appendChild(langs);
        skillcont.appendChild(webd);
        skillcont.appendChild(ml);
        skillcont.appendChild(tech);

        
        $("#skills-l").svg3DTagCloud(settingsL);
        $("#skills-w").svg3DTagCloud(settingsW);
        $("#skills-m").svg3DTagCloud(settingsM);
        $("#skills-t").svg3DTagCloud(settingsT);
    }


    $('#cont-name').focus(function(){
        $('#name-lab').addClass('active');
    });

    $('#cont-name').focusout(function(){
        $('#name-lab').removeClass('active');
    });


    $('#cont-email').focus(function(){
        $('#em-lab').addClass('active');
    });

    $('#cont-email').focusout(function(){
        $('#em-lab').removeClass('active');
    });


    $('#cont-msg').focus(function(){
        $('#msg-lab').addClass('active');
    });

    $('#cont-msg').focusout(function(){
        $('#msg-lab').removeClass('active');
    });


    var themebtn = document.getElementById('theme-btn');
    var themeSelector = document.getElementById('theme-selector');

    var body = document.querySelector('html');

    $('#theme-btn').click(function(){
        themebtn.classList.add('shift');
        themeSelector.classList.add('active');
    });

    $('#close-theme').click(function(){
        themebtn.classList.remove('shift');
        themeSelector.classList.remove('active');
    });


    // Particle Effect
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    let mouse = {
        x: null,
        y: null,
        radius: (canvas.height/130)*(canvas.width/130)
    };

    window.addEventListener('mousemove', 
        function(event){
            mouse.x = event.x;
            mouse.y = event.y;
        }
    );

    class Particle {
        constructor(x, y, directionX, directionY, size, color){
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
            ctx.fillstyle = '#8C5523';
            ctx.fill();
        }

        update(){
            if (this.x > canvas.width || this.x < 0){
                this.directionX = - this.directionX;
            }

            if (this.y > canvas.height || this.y < 0){
                this.directionY = - this.directionY;
            }

            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;

            let distance = Math.sqrt(dx*dx + dy*dy);
            if (distance < mouse.radius + this.size){
                if (mouse.x < this.x && this.x < canvas.width - this.size*10){
                    this.x += 10;
                    this.directionX = - this.directionX;
                }
                
                if (mouse.x > this.x && this.x > this.size * 10){
                    this.x -= 10;
                    this.directionX = - this.directionX;
                }

                if (mouse.y < this.y && this.y < canvas.height - this.size * 10){
                    this.y += 10;
                    this.directionY = - this.directionY;
                }

                if (mouse.y > this.y && this.y > this.size * 10){
                    this.y -= 10;
                    this.directionY = - this.directionY;
                }

            }

            this.x += this.directionX;
            this.y += this.directionY;

            this.draw();
        }
    }

    function init(){
        particlesArray = [];
        let numberOfParticles = canvas.width*canvas.height/4000;
        for(let i=0; i<numberOfParticles; i++){
            let size = (Math.random()*2.5) + 1;
            let x = (Math.random()*(innerWidth - size*4) + size*2);
            let y = (Math.random()*(innerHeight - size*4) + size*2);
            let directionX = 3*Math.random() - 1.5;
            let directionY = 3*Math.random() - 1.5;
            let color = '#000';

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animate(){
        requestAnimationFrame(animate);
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i=0; i<particlesArray.length; i++){
            particlesArray[i].update();
        }

        connect();

    }

    function connect() {
        let opacityValue = 1;

        for(let a=0; a<particlesArray.length; a++){
            for(let b=a; b<particlesArray.length; b++){
                let apart = particlesArray[a], bpart = particlesArray[b];
                let distance = (apart.x - bpart.x)*(apart.x - bpart.x) + (apart.y - bpart.y)*(apart.y - bpart.y);
                
                if (distance < 6000){
                    opacityValue = 1 - distance/6000;
                    ctx.strokeStyle = 'rgba(0, 0, 0, '+opacityValue+')';
                    ctx.linewidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(apart.x, apart.y);
                    ctx.lineTo(bpart.x, bpart.y);
                    ctx.stroke()
                }
                
            }
        }
    }

    window.addEventListener('resize', 
        function(){
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            mouse.radius = (canvas.height/130)*(canvas.width/130);
            init();
        }
    );

    window.addEventListener('mouseout', 
        function() {
            mouse.x = undefined;
            mouse.y = undefined;
        }
    );

    init();
    animate();


    $('input[type=radio][name=gameno]').change(function(){
        let value = this.value;
        let string = `./Media/game${value}.gif`;
        let element = document.getElementById('game-box');
        element.removeChild(element.firstChild);
        element.innerHTML = `<img src='${string}' class='game-window' />`
    })

});
