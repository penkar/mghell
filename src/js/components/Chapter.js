import React, { Component, PropTypes } from 'react';
import ChapterTitle from './ChapterTitle';
import Character from './Character';
import Line from './Line';


class Chapter extends Component {
  static propTypes = {
    dialog: React.PropTypes.object
  }

  text(){
    return this.props.dialog.dialog.map((data, idx) => {
      return(
        <div key={idx}>
          <Character character={data.character} />
          <Line line={data.line}/>
        </div>
      )
    });
  }

  render(){
    return (
      <div>
        <ChapterTitle title={this.props.dialog.title} />
        {::this.text()}
      </div>
    )
  }
}

export default Chapter;
