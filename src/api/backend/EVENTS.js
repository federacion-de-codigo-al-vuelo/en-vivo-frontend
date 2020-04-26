import { gql } from 'apollo-boost';

export default gql`
query EVENTS {
    allEvents {
        
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

