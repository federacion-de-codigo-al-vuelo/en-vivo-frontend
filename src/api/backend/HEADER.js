import { gql } from 'apollo-boost';

export default gql`
query HEADER {
    allConfigurations(first:1) {
    
        name
        
        logo {
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

