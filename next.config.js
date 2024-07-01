// next.config.js

module.exports = {
    webpack: (config, { isServer }) => {
      // Resolve o problema 'fs' apenas no lado do servidor
      if (!isServer) {
        config.resolve.fallback = {
          fs: false
        };
      }
      
      return config;
    }
  };
  