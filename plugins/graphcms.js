import { GraphQLClient } from 'graphql-request'

const graphcmsClient = new GraphQLClient(process.env.GREAPHCMS_ENDPOINT,
    {
        headers: {
            authorization: `Bearer ${process.env.TOKEN}`,
        }
    });

    console.log(graphcmsClient)
    
    export default (_, inject) => {
        inject('graphcms', graphcmsClient)
    }
 