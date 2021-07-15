var app = new Vue({
    el: '#app',
    data: {
        profile_image: './images/profile.jpg',
        name: 'Sandip Chaudhary',
        profile_content: `I am Web Developer & Graphic Designer From Jhapa. I am a fan of technology, design, and web
                        development.`,
        social_links: [
            {
                url: 'https://github.com/sandip124',
                image_link: './images/Github.svg',
                alt_text: 'Github'
            },
            {
                url: 'https://dribbble.com/Sndp124',
                image_link: './images/Dribbble.svg',
                alt_text: 'Dribbble'
            },
            {
                url: 'https://twitter.com/chaudhary_sndp',
                image_link: './images/Twitter.svg',
                alt_text: 'Twitter'
            },
            {
                url: 'https://www.behance.net/sandip124',
                image_link: './images/Behance.svg',
                alt_text: 'Behance'
            },
            {
                url: 'https://www.linkedin.com/in/sandip-chaudhary-534913164/',
                image_link: './images/Linkden.svg',
                alt_text: 'Linkden'
            },
        ],
        about_me: ` Sandip Started Programming in 2017.He spends most of his time writing HTML,Css and
                                Javascript.He
                                is currently having
                                degree BCA (Bachelore of Computer Application) in Gomendra Multiple College Birtamode.
                                <br>
                                He is currently working as Software Developer in Crystal Solution In Birtamode since
                                2018.He
                                is
                                very curious in
                                learning
                                new technologies and sharing them.

                                <br>
                                He enjoys doing design stuffs as well.He basically create UI of software and Application
                                using
                                the design tools like
                                Adobe XD, Figma.

                                Beside Programming he loves cooking and travelling.`,
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
                image_source: 'https://cdn.dribbble.com/users/2589332/screenshots/13226129/media/7f2fa979d4f21d9d78ac4c7c5abad273.jpg?compress=1&resize=600x450',
                alt_text: 'Chaudhary Design Studio Logo Redesign'
            },
            {
                link: 'https://cdn.dribbble.com/users/2589332/screenshots/11897536/media/28db1e613a684ce1d24ecbf0b667c637.jpg?compress=1',
                image_source: 'https://cdn.dribbble.com/users/2589332/screenshots/11897536/media/28db1e613a684ce1d24ecbf0b667c637.jpg?compress=1&resize=600x450',
                alt_text: 'Aggrestra Logo design concept'
            },
            {
                link: 'https://cdn.dribbble.com/users/2589332/screenshots/10886813/media/cdd6d97b9cf0e5ffbf4348fab0c1e41d.jpg?compress=1',
                image_source: 'https://cdn.dribbble.com/users/2589332/screenshots/10886813/media/cdd6d97b9cf0e5ffbf4348fab0c1e41d.jpg?compress=1&resize=800x600',
                alt_text: 'Admin Dashboard UI Concept'
            }
        ],
        projects: [
            {
                project_icon: "./images/Github.svg",
                project_title: 'Confirm X',
                project_description: 'The next generation responsive confirm dialog which is suitable for all devices.',
                url: ''
            },
            {
                project_icon: "./images/Github.svg",
                project_title: 'Notifyx',
                project_description: ' The next generation notification library you would love to  use it.',
                url: ''
            },
            {
                project_icon: "./images/Github.svg",
                project_title: 'Vector X',
                project_description: 'The smart and powerful vector editing tool right in your web browser.',
                url: ''
            },
        ]
    }
})


window.addEventListener('DOMContentLoaded', (event) => {
    let loader = document.getElementById('loader');
    loader.style.display = "none";
});