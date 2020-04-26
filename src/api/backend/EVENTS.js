import { gql } from 'apollo-boost';

export default gql`
query EVENTS {
    allEvents {
    
        name

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

