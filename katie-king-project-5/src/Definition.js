import React, { Component, Fragment } from 'react';
// import axios from 'axios';
// // import Word from './Word';

// class Definition extends Component {

//     constructor(props) {
//         super(props);
//         console.log(this.props);
//         // this.state = {
//         //     // hwi: {}
//         // };
//     }

//     // componentDidMount() {

//     //     // save url containing word
//     //     const url = 'https://dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=876ed444-a30f-40ca-9a52-4d2265921d9d';

//     //     // call url through axios
//     //     axios.get(url)
        
//     //         // once the call has completed...
//     //         .then((response) => {
//     //             this.setState(() => ({
//     //                 hwi: response.data[0].hwi
//     //             })
//     //             )
//     //         }
//     //     )
//     // }

// // choose 1 word at random and extract definition

//     render() 
//     {
//         // console.log(this.state.hwi)
//         return (
//             <div>
//                 {/* <p>{this.state.hwi.hw}</p> */}
//             </div>
//         )
//     }
// }

// export default Definition;



// BEGINNING OF RECENT CLASS CODE *****

// import React, { Component, Fragment } from 'react';
// import axios from 'axios';
// // import Word from './Word';

// class Definition extends Component {

//     constructor(props) {
//         super(props);
//     };


//         this.buildDef = this.buildDef.bind(this);

//     // build function to render array of shortdefs
//     // useful bc isolates & keeps "rendering" as a single-function thing

//     buildDefs() {
//         return (
//             {this.props.shortdef.map( (def) => {
//                 (<p>{def}</p>)
//             })}
//         )
//     }
    
    
    
//     // choose 1 word at random and extract definition
    
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 {/* <p>{this.props.shortdef[0]}</p> */}
//             </div>
//         );
//     };
// }

// export default Definition;

// use JSON for making my own random word bank?? use excel?

// END OF RECENT CLASS CODE *******

// const Definition = (props) => {
//     console.log(props)

    // const buildDefs = () => {
        // return props.shortdefs.map((def, index) => {
        //     return <p key={index}>{def}</p>
        // })
    // }

class Definition extends Component {

    render() {
        return (
            <div>
                <h1>
                    {this.props.shortdef}
                </h1>
            </div>
        )
    }
}

export default Definition;