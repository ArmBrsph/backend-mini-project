module.exports = {
    apps: [{
        name: "Internal API",
        script: "npm",
        watch: true,
        args: 'run start',
        autorestart: true,
        max_memory_restart: '1G',
        kill_timeout: 10000,
        env_production: {
            NODE_ENV: "production",
            NODE_CONFIG_DIR: "./config"
        },
    }],
};