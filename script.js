/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle("show");

    }
);



/* =========================================
   PROJECT DATA
========================================= */

const projects = {


    /* =====================================
       SANGFOR BMKG
    ===================================== */

    sangfor: {

        category:
            "HYPERCONVERGED INFRASTRUCTURE",

        title:
            "Sangfor HCI – BMKG",


        intro:
            "Implementation, health check dan infrastructure analysis pada lingkungan Sangfor Hyperconverged Infrastructure.",


        cover:
            "images/bmkga.jpeg",


        client:
            "BMKG",


        solution:
            "Sangfor HCI",


        role:
            "System Engineer",


        overview:
            `Project ini berfokus pada implementasi dan pengelolaan
            infrastruktur Sangfor HCI pada lingkungan data center.
            Dilakukan monitoring resource, health check,
            capacity analysis dan evaluasi konfigurasi High Availability
            untuk meningkatkan reliability dan availability layanan.`,


        technology: [

            "Sangfor HCI",

            "Virtualization",

            "Storage",

            "HA"

        ],


        gallery: [

            "images/bmkgc.jpg",

            "images/bmkgd.jpg",

            "images/sangfor-bmkg-3.jpg"

        ],


        topology:
            "images/sangfor-bmkg-topology.jpg",


        challenges: [

            "CPU utilization dan overcommit resource.",

            "Memory allocation perlu dilakukan evaluasi.",

            "Konfigurasi High Availability belum optimal.",

            "Perlu capacity planning untuk pertumbuhan workload."

        ],


        solutions: [

            "Melakukan infrastructure health check.",

            "Melakukan capacity analysis CPU, memory dan storage.",

            "Memberikan rekomendasi optimasi resource.",

            "Merekomendasikan konfigurasi HA N+1 untuk meningkatkan availability."

        ]

    },



    /* =====================================
       NUTANIX BMKG
    ===================================== */

    nutanix: {

        category:
            "PRIVATE CLOUD",

        title:
            "Nutanix – BMKG",

        intro:
            "Cluster health check dan infrastructure assessment pada environment Nutanix.",

        cover:
            "images/nutanix.jpg",

        client:
            "BMKG",

        solution:
            "Nutanix Infrastructure",

        role:
            "System Engineer",

        overview:
            `Melakukan pemeriksaan kondisi cluster,
            resource utilization, storage capacity,
            health check dan upgrade planning pada
            environment Nutanix.`,

        technology: [

            "Nutanix",

            "AOS",

            "Prism Central",

            "LCM",

            "NCC"

        ],

        gallery: [

            "images/nutanix1.jpg"

        ],

        topology:
            "images/nutanix-bmkg.jpg",

        challenges: [

            "Memory utilization cukup tinggi.",

            "Perlu evaluasi cluster capacity.",

            "Network interface speed perlu dilakukan pengecekan."

        ],

        solutions: [

            "Melakukan health check menggunakan NCC.",

            "Melakukan capacity analysis.",

            "Memberikan rekomendasi upgrade dan maintenance."

        ]

    },



    /* =====================================
       OPENSTACK
    ===================================== */

    openstack: {

        category:
            "PRIVATE CLOUD",

        title:
            "OpenStack – Pupuk Indonesia",

        intro:
            "Implementation OpenStack environment dan integration dengan backup serta monitoring.",

        cover:
            "images/openstack-pupuk.jpg",

        client:
            "Pupuk Indonesia",

        solution:
            "OpenStack Private Cloud",

        role:
            "System Engineer",

        overview:
            `Project OpenStack untuk mendukung
            cloud infrastructure dengan environment
            virtualization, compute, network,
            storage dan monitoring.`,

        technology: [

            "OpenStack",

            "Linux",

            "Ceph",

            "Grafana",

            "Kolla"

        ],

        gallery: [

            "images/openstack-pupuk.jpg"

        ],

        topology:
            "images/openstack-pupuk.jpg",

        challenges: [

            "Service integration.",

            "Monitoring infrastructure.",

            "Backup integration.",

            "Service troubleshooting."

        ],

        solutions: [

            "Melakukan deployment dan configuration.",

            "Integrasi monitoring.",

            "Backup environment integration.",

            "Infrastructure troubleshooting."

        ]

    },



    /* =====================================
       BACKUP
    ===================================== */

    backup: {

        category:
            "BACKUP & RECOVERY",

        title:
            "Vinchin Backup – Pupuk Indonesia",

        intro:
            "Backup infrastructure management, replication dan disaster recovery planning.",

        cover:
            "images/vinchin-pupuk.jpg",

        client:
            "Pupuk Indonesia",

        solution:
            "Vinchin Backup",

        role:
            "System Engineer",

        overview:
            `Project backup infrastructure yang berfokus
            pada backup policy, replication,
            restore testing dan disaster recovery scenario.`,

        technology: [

            "Vinchin",

            "VMware",

            "Backup",

            "Replication",

            "Disaster Recovery"

        ],

        gallery: [

            "images/vinchin-pupuk.jpg"

        ],

        topology:
            "images/vinchin-pupuk.jpg",

        challenges: [

            "Backup scheduling.",

            "Storage utilization.",

            "Replication planning.",

            "Restore testing."

        ],

        solutions: [

            "Optimasi backup policy.",

            "Implementasi replication.",

            "Melakukan restore testing.",

            "Membuat DR scenario."

        ]

    },



    /* =====================================
       NINJAONE
    ===================================== */

    ninjaone: {

        category:
            "ENDPOINT MANAGEMENT",

        title:
            "NinjaOne – Baramulti",

        intro:
            "Endpoint monitoring dan remote management untuk mendukung IT operations.",

        cover:
            "images/ninjaone-baramulti.jpg",

        client:
            "Baramulti",

        solution:
            "NinjaOne Endpoint Management",

        role:
            "System Engineer",

        overview:
            `Implementasi endpoint management
            untuk monitoring device,
            remote support dan automation.`,

        technology: [

            "NinjaOne",

            "Endpoint Management",

            "Automation",

            "Monitoring"

        ],

        gallery: [

            "images/ninjaone-baramulti.jpg"

        ],

        topology:
            "images/ninjaone-baramulti.jpg",

        challenges: [

            "Endpoint visibility.",

            "Remote management.",

            "Policy automation."

        ],

        solutions: [

            "Endpoint monitoring.",

            "Remote support.",

            "Automation policy."

        ]

    },



    /* =====================================
       MANAGEENGINE
    ===================================== */

    manageengine: {

        category:
            "MONITORING & MANAGEMENT",

        title:
            "ManageEngine – MyBank",

        intro:
            "Infrastructure monitoring dan management untuk enterprise environment.",

        cover:
            "images/manageengine-mybank.jpg",

        client:
            "MyBank",

        solution:
            "ManageEngine",

        role:
            "System Engineer",

        overview:
            `Implementasi dan support
            infrastructure monitoring untuk meningkatkan
            visibility dan system health monitoring.`,

        technology: [

            "ManageEngine",

            "Monitoring",

            "Logs",

            "Infrastructure Management"

        ],

        gallery: [

            "images/manageengine-mybank.jpg"

        ],

        topology:
            "images/manageengine-mybank.jpg",

        challenges: [

            "Infrastructure visibility.",

            "Monitoring integration.",

            "System health analysis."

        ],

        solutions: [

            "Monitoring configuration.",

            "Infrastructure analysis.",

            "System health monitoring."

        ]

    },



    /* =====================================
       SANGFOR BARAMULTI
    ===================================== */

    baramulti: {

        category:
            "HCI INFRASTRUCTURE",

        title:
            "Sangfor HCI – Baramulti",

        intro:
            "Infrastructure deployment dan cluster management.",

        cover:
            "images/sangfor-baramulti.jpg",

        client:
            "Baramulti",

        solution:
            "Sangfor HCI",

        role:
            "System Engineer",

        overview:
            `Deployment dan support
            Sangfor HCI infrastructure
            termasuk cluster management
            dan performance optimization.`,

        technology: [

            "Sangfor HCI",

            "Virtualization",

            "Storage"

        ],

        gallery: [

            "images/sangfor-baramulti.jpg"

        ],

        topology:
            "images/sangfor-baramulti.jpg",

        challenges: [

            "Cluster configuration.",

            "Resource allocation.",

            "Infrastructure optimization."

        ],

        solutions: [

            "Cluster configuration.",

            "Resource monitoring.",

            "Performance optimization."

        ]

    },



    /* =====================================
       ADC
    ===================================== */

    adc: {

        category:
            "APPLICATION DELIVERY",

        title:
            "Sangfor ADC – LAI",

        intro:
            "Application delivery dan load balancing configuration.",

        cover:
            "images/adc.jpg",

        client:
            "LAI",

        solution:
            "Sangfor ADC",

        role:
            "System Engineer",

        overview:
            `Configuration application delivery,
            load balancing dan network connectivity
            untuk mendukung aplikasi enterprise.`,

        technology: [

            "Sangfor ADC",

            "Load Balancing",

            "Network",

            "Application Delivery"

        ],

        gallery: [

            "images/adc1.jpg"

        ],

        topology:
            "images/sangfor-adc-lai.jpg",

        challenges: [

            "Application access.",

            "Port configuration.",

            "External connectivity."

        ],

        solutions: [

            "Application delivery configuration.",

            "External port mapping.",

            "Network troubleshooting."

        ]

    },



    /* =====================================
       EXAGRID
    ===================================== */

    exagrid: {

        category:
            "BACKUP STORAGE",

        title:
            "ExaGrid – Pegadaian",

        intro:
            "Backup storage infrastructure dan retention management.",

        cover:
            "images/exagrid-pegadaian.jpg",

        client:
            "Pegadaian",

        solution:
            "ExaGrid Backup Storage",

        role:
            "System Engineer",

        overview:
            `Backup storage solution
            dengan fokus pada backup performance,
            storage efficiency dan retention management.`,

        technology: [

            "ExaGrid",

            "Backup",

            "Storage",

            "Retention"

        ],

        gallery: [

            "images/exagrid-pegadaian.jpg"

        ],

        topology:
            "images/exagrid-pegadaian.jpg",

        challenges: [

            "Backup storage capacity.",

            "Retention management.",

            "Backup performance."

        ],

        solutions: [

            "Storage optimization.",

            "Backup policy planning.",

            "Retention configuration."

        ]

    },

     /* =====================================
       VINCHIN BACKUP KOMDIGI
    ===================================== */

    exagrid: {

        category:
            "SOFWARE BACKUP",

        title:
            "Vinchin – Komdigi",

        intro:
            "Backup & Disaster Recovery.",

        cover:
            "images/komdigic.jpeg",

        client:
            "Komdigi",

        solution:
            "Software Backup",

        role:
            "System Engineer",

        overview:
            `Backup solution
            dengan fokus pada backup performance,
            storage efficiency dan retention management.`,

        technology: [

            "Vinchin",

            "Backup",

            "Storage",

            "Retention"

        ],

        gallery: [

            "images/komdigib"

        ],

        topology:
            "images/",

        challenges: [

            "Backup Restore.",

            "Retention management.",

            "Backup performance."

        ],

        solutions: [

            "Storage optimization.",

            "Backup policy planning.",

            "Retention configuration."

        ]

    }

};



/* =========================================
   MODAL ELEMENT
========================================= */

const modal =
    document.getElementById(
        "projectModal"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


const modalCover =
    document.getElementById(
        "modalCover"
    );


const modalCategory =
    document.getElementById(
        "modalCategory"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalIntro =
    document.getElementById(
        "modalIntro"
    );


const modalOverview =
    document.getElementById(
        "modalOverview"
    );


const modalClient =
    document.getElementById(
        "modalClient"
    );


const modalSolution =
    document.getElementById(
        "modalSolution"
    );


const modalRole =
    document.getElementById(
        "modalRole"
    );


const modalTech =
    document.getElementById(
        "modalTech"
    );


const modalGallery =
    document.getElementById(
        "modalGallery"
    );


const modalTopology =
    document.getElementById(
        "modalTopology"
    );


const modalChallenges =
    document.getElementById(
        "modalChallenges"
    );


const modalSolutions =
    document.getElementById(
        "modalSolutions"
    );



/* =========================================
   OPEN PROJECT
========================================= */

const projectButtons =
    document.querySelectorAll(
        ".project-btn"
    );


projectButtons.forEach(
    button => {


        button.addEventListener(
            "click",
            () => {


                const projectName =
                    button.dataset.project;


                const project =
                    projects[
                        projectName
                    ];


                /* COVER */

                modalCover.src =
                    project.cover;


                /* CATEGORY */

                modalCategory.textContent =
                    project.category;


                /* TITLE */

                modalTitle.textContent =
                    project.title;


                /* INTRO */

                modalIntro.textContent =
                    project.intro;


                /* OVERVIEW */

                modalOverview.textContent =
                    project.overview;


                /* CLIENT */

                modalClient.textContent =
                    project.client;


                /* SOLUTION */

                modalSolution.textContent =
                    project.solution;


                /* ROLE */

                modalRole.textContent =
                    project.role;



                /* TECHNOLOGY */

                modalTech.innerHTML =
                    "";


                project.technology.forEach(
                    tech => {


                        const span =
                            document.createElement(
                                "span"
                            );


                        span.textContent =
                            tech;


                        modalTech.appendChild(
                            span
                        );

                    }
                );



                /* GALLERY */

                modalGallery.innerHTML =
                    "";


                project.gallery.forEach(
                    image => {


                        const img =
                            document.createElement(
                                "img"
                            );


                        img.src =
                            image;


                        img.alt =
                            project.title;


                        modalGallery.appendChild(
                            img
                        );

                    }
                );



                /* TOPOLOGY */

                modalTopology.src =
                    project.topology;



                /* CHALLENGES */

                modalChallenges.innerHTML =
                    "";


                project.challenges.forEach(
                    challenge => {


                        const li =
                            document.createElement(
                                "li"
                            );


                        li.textContent =
                            challenge;


                        modalChallenges.appendChild(
                            li
                        );

                    }
                );



                /* SOLUTIONS */

                modalSolutions.innerHTML =
                    "";


                project.solutions.forEach(
                    solution => {


                        const li =
                            document.createElement(
                                "li"
                            );


                        li.textContent =
                            solution;


                        modalSolutions.appendChild(
                            li
                        );

                    }
                );



                /* SHOW MODAL */

                modal.classList.add(
                    "show"
                );


                document.body.style.overflow =
                    "hidden";


                modal.scrollTop =
                    0;

            }
        );


    }
);



/* =========================================
   CLOSE MODAL
========================================= */

closeModal.addEventListener(
    "click",
    () => {


        modal.classList.remove(
            "show"
        );


        document.body.style.overflow =
            "auto";


    }
);



/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

modal.addEventListener(
    "click",
    event => {


        if (
            event.target === modal
        ) {

            modal.classList.remove(
                "show"
            );


            document.body.style.overflow =
                "auto";

        }


    }
);



/* =========================================
   ESC CLOSE
========================================= */

document.addEventListener(
    "keydown",
    event => {


        if (
            event.key === "Escape"
        ) {

            modal.classList.remove(
                "show"
            );


            document.body.style.overflow =
                "auto";

        }


    }
);



/* =========================================
   PROJECT FILTER
========================================= */

const filters =
    document.querySelectorAll(
        ".filter"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filters.forEach(
    filter => {


        filter.addEventListener(
            "click",
            () => {


                filters.forEach(
                    button => {

                        button.classList.remove(
                            "active"
                        );

                    }
                );


                filter.classList.add(
                    "active"
                );


                const category =
                    filter.dataset.filter;


                projectCards.forEach(
                    card => {


                        if (
                            category === "all"
                        ) {


                            card.style.display =
                                "flex";


                        }

                        else if (
                            card.dataset.category ===
                            category
                        ) {


                            card.style.display =
                                "flex";


                        }

                        else {


                            card.style.display =
                                "none";


                        }


                    }
                );


            }
        );


    }
);