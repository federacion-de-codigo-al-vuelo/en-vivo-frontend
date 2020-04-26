import { gql } from 'apollo-boost';

export default gql`
query EVENT_SLUG($slug: String!) {
    allEvents(
        where: {
            slug: $slug,
        },
        first: 1
    ) {
        
        id
        name
        slug

        dateStart    
        dateEnd
        
        image {
            resizedImages {
                file {
                    publicUrl
                }
                size {
                    name
                    size
                }
            }
        }

    }
}
` 

