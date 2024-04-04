export default ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                s3Options: {
                    accessKeyId: env('USE_ACCESS_KEY_ID'),
                    secretAccessKey: env('USE_ACCESS_SECRET'),
                    region: env('USE_REGION'),
                    params: {
                      Bucket: env('USE_BUCKET_NAME'),
                    },
                }
            },
        },
    },
    email: {
        config: {
          provider: 'amazon-ses',
          providerOptions: {
            key: env('USE_ACCESS_KEY_ID'),
            secret: env('USE_ACCESS_SECRET'),
            amazon: 'https://email.eu-north-1.amazonaws.com',
          },
          settings: {
            defaultFrom: 'dev@theskillhack.com',
            defaultReplyTo: 'dev@theskillhack.com',
          },
        },
      },
  });