import React, { Component, PropTypes } from 'react';
import ChapterTitle from './ChapterTitle';
import Character from './Character';
import Line from './Line';


class Chapter extends Component {
  static propTypes = {
    dialog: PropTypes.object,
    index: PropTypes.number,
    offset: PropTypes.number,
    report: PropTypes.func,
  }

  text(){
    // for(let i = 0; i < 50; i++){
    //
    // }
    return this.props.dialog.dialog.map((data, idx) => {
      return(
        <div key={idx}>
          <Character character={data.character} />
          <Line line={data.line}/>
        </div>
      )
    });
  }

  render(){console.log(this.props.offset);
    return (
      <div>
        <ChapterTitle title={this.props.dialog.title} />
        {::this.text()}
      </div>
    )
  }
}

export default Chapter;
