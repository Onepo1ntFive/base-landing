(function () {
    // scroll effects
    gsap.registerPlugin(ScrollTrigger);

    // tl_gsap_video
    let tl_gsap_video = gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('.js-video'),
            start: "-50% center",
            end: "bottom center",
            scrub: false,
            markers: false,
            id: 'tl_gsap_video',
            toggleActions: "play none none reverse",
        }
    })

    tl_gsap_video
        .fromTo(document.querySelector('.js-video-desc .video-desc__inner'), {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        }, 'tl_gsap_video')
        .fromTo(document.querySelector('.js-video a'), {
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        }, 'tl_gsap_video')

    // tl_gsap_steps
    let tl_gsap_steps = gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('.js-steps'),
            start: "top center",
            end: "bottom center",
            scrub: false,
            markers: false,
            id: 'tl_gsap_steps',
            toggleActions: "play none none reverse",
        }
    })

    tl_gsap_steps
        .fromTo(document.querySelector('.js-steps .steps__decor'), {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 3
        }, 'tl_gsap_steps')
        .fromTo(document.querySelector('.js-steps .steps__top-title h2'), {
            y: 100
        }, {
            y: 0,
            delay: 0.5,
            duration: 1.5
        }, 'tl_gsap_steps')
        .fromTo(document.querySelector('.js-steps .steps__top-text p'), {
            y: 100
        }, {
            y: 0,
            delay: 0.75,
            duration: 1.5
        }, 'tl_gsap_steps')

    // tl_gsap_notebook
    let tl_gsap_notebook = gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('.js-pc'),
            start: "-25% center",
            end: "75% center",
            scrub: true,
            markers: false,
            id: 'tl_gsap_notebook',
            toggleActions: "play none none reverse",
        }
    })

    tl_gsap_notebook
        .fromTo(document.querySelector('.js-pc img'), {
            opacity: 0,
            y: 500,
            duration: 2,
        }, {
            opacity: 1,
            y: 0,
        }, 'tl_gsap_notebook')

    // tl_gsap_plans
    let tl_gsap_plans = gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('.js-plans'),
            start: "top center",
            end: "bottom center",
            scrub: false,
            markers: false,
            id: 'tl_gsap_plans',
            toggleActions: "play none none reverse",
        }
    })

    tl_gsap_plans
        .fromTo(document.querySelector('.js-plans .plans__item--text p'), {
            y: '150%',
        }, {
            y: "0%",
            duration: 1.5
        }, 'tl_gsap_plans')
        .fromTo(document.querySelector('.js-plans .plans__title h2'), {
            y: '150%',
        }, {
            y: "0%",
            duration: 1.5
        }, 'tl_gsap_plans')
        .fromTo(document.querySelector('.js-plans .plans__line'), {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1.5
        }, 'tl_gsap_plans')

    // tl_gsap_planet
    let tl_gsap_planet = gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('.js-planet'),
            start: "top center",
            end: "bottom center",
            scrub: false,
            markers: false,
            id: 'tl_gsap_planet',
            toggleActions: "play none none reverse",
        }
    })

    tl_gsap_planet
        .fromTo(document.querySelector('.js-planet video'), {
            opacity: 0,
        }, {
            opacity: 1,
        }, 'tl_gsap_planet')

    // tl_gsap_contacts
    let tl_gsap_contacts = gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('.js-contacts'),
            start: "top center",
            end: "bottom center",
            scrub: false,
            markers: false,
            id: 'tl_gsap_contacts',
            toggleActions: "play none none reverse",
        }
    })

    tl_gsap_contacts
        .fromTo(document.querySelectorAll('.js-contacts .contacts__text span'), {
            top: 100
        }, {
            top: 0
        }, 'tl_gsap_contacts')
        .fromTo(document.querySelectorAll('.js-contacts .contacts__item'), {
            opacity: 0,
        }, {
            opacity: 1,
            stagger: 0.1,
            delay: 0.5
        }, 'tl_gsap_contacts')

})();