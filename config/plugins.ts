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
    }
  });