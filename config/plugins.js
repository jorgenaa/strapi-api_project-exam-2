module.exports = ({ env }) => {
    if(env('NODE_ENV') === 'production') {
        return {
            upload: {
                provider: 'aws-s3',
                providerOptions: {
                    accessKeyId: env('AWS_ACCESS_KEY_ID'),
                    secretAccessKey: env('AWS_ACCESS_SECRET'),
                    accessKey: env('AWS_ACCESS_KEY'),
                    secretKey: env('AWS_SECRET_KEY'),
                    region: env('AWS_REGION'),
                    params: {
                        Bucket: env('AWS_BUCKET')
                    }
                }
            }
        }
    }
    return {

    }
  
}
