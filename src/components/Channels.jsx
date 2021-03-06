import React from 'react';
import cn from 'classnames';

const Channels = ({channels: { list, currentChannelId }}) => {
  if (list.length) {
    return (
      <ul className="list-group">
        {list.map((channel) => {
          const className = cn({
            'list-group-item list-group-item-action': true,
            active: channel.id === currentChannelId,
          });
          return (
            <li className={className} key={channel.id}>
              {channel.name}
            </li>
          );
        })}
      </ul>
    );
  }
  return null;
};

export default Channels;
