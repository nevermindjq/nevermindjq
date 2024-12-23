import Docker from "@/icons/tools/Docker.vue";
import K8s from "@/icons/tools/K8s.vue";
import Nginx from "@/icons/tools/Nginx.vue";
import CSharp from "@/icons/languages/CSharp.vue";
import JS from "@/icons/languages/JS.vue";
import Vue from "@/icons/frameworks/Vue.vue";
import Bootstrap from "@/icons/frameworks/Bootstrap.vue";
import Tailwind from "@/icons/frameworks/Tailwind.vue";
import Python from "@/icons/languages/Python.vue";
import Blazor from "@/icons/frameworks/Blazor.vue";
import AspNet from "@/icons/frameworks/AspNet.vue";
import IdentityServer from "@/icons/libraries/IdentityServer.vue";
import AvaloniaUI from "@/icons/libraries/AvaloniaUI.vue";
import MAUI from "@/icons/frameworks/MAUI.vue";
import Dart from "@/icons/languages/Dart.vue";
import Flutter from "@/icons/frameworks/Flutter.vue";
import Xamarin from "@/icons/frameworks/Xamarin.vue";
import WPF from "@/icons/frameworks/WPF.vue";
import WinForms from "@/icons/frameworks/WinForms.vue";
import NodeJS from "@/icons/frameworks/NodeJS.vue";
import Database from "@/icons/Database.vue";
import PostgreSQL from "@/icons/database/PostgreSQL.vue";
import MongoDB from "@/icons/database/MongoDB.vue";
import Redis from "@/icons/database/Redis.vue";
import Auth0 from "@/icons/tools/Auth0.vue";

const frontend = [
    {
        url: "https://en.wikipedia.org/wiki/JavaScript",
        icon: JS,
        techs: [
            {
                url: "https://vuejs.org/",
                icon: Vue,
            },
            {
                url: "https://nodejs.org/",
                icon: NodeJS,
            }
        ]
    },
    {
        url: "https://dotnet.microsoft.com/",
        icon: CSharp,
        techs: [
            {
                url: "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor",
                icon: Blazor,
            }
        ]
    },
    {
        url: "https://tailwindcss.com/",
        icon: Tailwind,
    },
    {
        url: "https://getbootstrap.com/",
        icon: Bootstrap,
    }
]

const backend = [
    {
        url: "https://dotnet.microsoft.com/",
        icon: CSharp,
        techs: [
            {
                url: "https://dotnet.microsoft.com/apps/aspnet",
                icon: AspNet,
            },
            {
                url: "https://duendesoftware.com/products/identityserver",
                icon: IdentityServer,
            },
            {
                url: "https://auth0.com/",
                icon: Auth0,
            }
        ]
    },
    {
        url: null,
        icon: Database,
        techs: [
            {
                url: "https://www.postgresql.org/",
                icon: PostgreSQL
            },
            {
                url: "https://learn.mongodb.com/",
                icon: MongoDB,
            },
            {
                url: "https://github.com/redis/redis",
                icon: Redis,
            }
        ]
    }
]

const software = [
    {
        url: "https://dotnet.microsoft.com/",
        icon: CSharp,
        techs: [
            {
                url: "https://learn.microsoft.com/dotnet/desktop/wpf",
                icon: WPF,
            },
            {
                url: "https://avaloniaui.net/",
                icon: AvaloniaUI,
            },
            {
                url: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/",
                icon: WinForms,
            }
        ]
    },
    {
        url: "https://python.org",
        icon: Python,
        techs: []
    }
]

const mobile = [
    {
        url: "https://dotnet.microsoft.com/",
        icon: CSharp,
        techs: [
            {
                url: "https://dotnet.microsoft.com/apps/maui",
                icon: MAUI,
            },
            {
                url: "https://dotnet.microsoft.com/apps/xamarin",
                icon: Xamarin,
            }
        ]
    },
    {
        url: "https://dart.dev/",
        icon: Dart,
        techs: [
            {
                url: "https://flutter.dev/",
                icon: Flutter,
            }
        ]
    }
]

const tools = [
    {
        url: "https://www.docker.com/",
        icon: Docker,
    },
    {
        url: "https://kubernetes.io/",
        icon: K8s,
    },
    {
        url: "https://nginx.org/",
        icon: Nginx,
    }
];

export const data = [
    {
        name: "Frontend",
        list: frontend,
    },
    {
        name: "Backend",
        list: backend,
    },
    {
        name: "Software",
        list: software,
    },
    {
        name: "Mobile",
        list: mobile,
    },
    {
        name: "Tools",
        list: tools,
    }
]