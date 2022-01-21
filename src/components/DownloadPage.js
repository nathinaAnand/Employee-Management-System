
import React from 'react';
import axios from 'axios';

import FileSaver from 'file-saver';

class Download extends React.Component {

    downloadEmployeeData = () => {
          axios({
            url: 'http://localhost:8067/api/v1//employees',
            method: 'GET',
            responseType: 'blob', 
          }).then((response) => {
            FileSaver.saveAs(new Blob([response.data]));
          });

    }

    render() {
        return (
            <div id="container"><br/><br/>
               <h2 >Click Download Button To Get All Datas.........</h2><br/><br/>
                <button onClick={this.downloadEmployeeData}>Download</button>
                <p/>
            </div>
        )
    }

}

export default Download;