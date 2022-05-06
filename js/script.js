var app = new Vue({
    el: '#app',
    data: {
        profile_image: './images/profile.jpg',
        name: 'Sandip Chaudhary',
        profile_content: `I am Dotnet Developer & UI Designer from Jhapa. I am a fan of technology, design, and web
                        development. I love to do design stuffs. I also have primary focus on clean code.`,
        social_links: [
            {
                url: 'https://github.com/sandip124',
                image_link: './images/Github.svg',
                alt: 'Github'
            },
            {
                url: 'https://dribbble.com/sandip124',
                image_link: './images/Dribbble.svg',
                alt: 'Dribbble'
            },
            {
                url: 'https://twitter.com/chaudhary_sndp',
                image_link: './images/Twitter.svg',
                alt: 'Twitter'
            },
            {
                url: 'https://www.behance.net/sandip124',
                image_link: './images/Behance.svg',
                alt: 'Behance'
            },
            {
                url: 'https://www.linkedin.com/in/sandip124/',
                image_link: './images/Linkden.svg',
                alt: 'Linkden'
            },
        ],
        about_me: ` I  have Started Programming in 2017.I spend most of my time writing Coding application related to dotnet technologies and do some design stuffs . I  am currently having degree BCA (Bachelore of Computer Application) in Gomendra Multiple College Birtamode.
                                <br>
                                I am currently working as Software Developer in Pratham It System Pvt.ltd in Birtamode. I am very curious in learning new technologies, clean code practices and sharing them.
                                <br>
                                I enjoys doing design stuffs, some you can checkout in my dribbble and Behance profile. I basically create web application, desktop application and also create  UI for software implementation using the design tools like Figma,Adobe XD.
                                Beside Programming i love cooking, travelling, singing, dancing. `,
        about_image: './images/about.png',
        about_image_alt_text: "About me",
        design_projects: [
            {
                link: 'https://cdn.dribbble.com/users/2589332/screenshots/15376588/media/0f03cfd0b7b32562ca2205420dc5c6a9.jpg?compress=1',
                image_source: 'https://cdn.dribbble.com/users/2589332/screenshots/15376588/media/0f03cfd0b7b32562ca2205420dc5c6a9.jpg?compress=1&resize=600x450',
                alt_text: 'Arcdeo Landing Page'
            },
            {
                link: 'https://cdn.dribbble.com/users/2589332/screenshots/14586244/media/3b1b4ae3b551f99284a6a8dcc2b84a40.jpg?compress=1',
                image_source: 'https://cdn.dribbble.com/users/2589332/screenshots/14586244/media/3b1b4ae3b551f99284a6a8dcc2b84a40.jpg?compress=1&resize=600x450',
                alt_text: 'Adbhut Gaming Sansar Logo'
            },
            {
                link: 'https://cdn.dribbble.com/users/2589332/screenshots/13226129/media/7f2fa979d4f21d9d78ac4c7c5abad273.jpg?compress=1',
                image_source: '/images/works/chaudhary_design_studio.jpg',
                alt_text: 'Chaudhary Design Studio Logo Redesign'
            },
            {
                link: 'https://cdn.dribbble.com/users/2589332/screenshots/11897536/media/28db1e613a684ce1d24ecbf0b667c637.jpg?compress=1',
                image_source: '/images/works/aggestra.png',
                alt_text: 'Aggrestra Logo design concept'
            },
            {
                link: 'https://cdn.dribbble.com/users/2589332/screenshots/10886813/media/cdd6d97b9cf0e5ffbf4348fab0c1e41d.jpg?compress=1',
                image_source: 'https://cdn.dribbble.com/users/2589332/screenshots/10886813/media/cdd6d97b9cf0e5ffbf4348fab0c1e41d.jpg?compress=1&resize=800x600',
                alt_text: 'Admin Dashboard UI Concept'
            }
        ],
        projects: [],
    },
    mounted() {
        fetch('https://gh-pinned-repos.egoist.sh/?username=sandip124')
            .then(res => res.json())
            .then(res => {
                for (const repo of res) {
                    this.projects.push({
                        project_icon: "./images/Github.svg",
                        project_title: repo.repo,
                        project_description: repo.description,
                        url: repo.link,
                        language: repo.language,
                        stars: repo.stars,
                        forks: repo.forks
                    })
                }
            });
    }
})


window.addEventListener('load', (event) => {
    let loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
});


let scrollLink = document.getElementById("scroll-link");
let header = document.getElementById("header");

scrollLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scroll({
        top: header.offsetHeight,
        behavior: 'smooth'  // 👈 
    });

});


