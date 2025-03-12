import React, { useState } from 'react';
import styles from './SprintBoard.module.scss'
import UserStoriesPopUp from './components/UserStoriesPopUp/UserStoriesPopUp';
import TicketCard from './components/TicketCard/TicketCard';

function SprintBoard() {
  const [showUserStoriesPopUp, setUserStoriesPopUp] = useState(false)
  const [tickets, setTickets] = useState<{title: string; content: string}[]>([]);

  const addTicket = (title: string, content: string) => {
    setTickets([...tickets, { title, content }]);
  };

  return (  
    <div>
      <div> 
        <button className={styles.addStoryButton} onClick={() => setUserStoriesPopUp(true)}>Add Story</button>
        {showUserStoriesPopUp && <UserStoriesPopUp onClose={() => setUserStoriesPopUp(false)}/>}
      </div>
      <div className = {styles.layoutboard}>
      
        <div className= {styles.column}>
          <h2>To Do</h2>
          {tickets.map((ticket, index) => (
            <TicketCard key={index} title={ticket.title} content={ticket.content} />
          ))}
          <div>Ticket 1</div>
          <div>Ticket 2</div>
          <div>Ticket 3</div>
        </div>

        <div className= {styles.column}>
          <h2>In Progress</h2>
          <div>Ticket 4</div>
          <div>Ticket 5</div>
        </div>

        <div className= {styles.column}>
          <h2>Testing</h2>
          <div>Ticket 6</div>
        </div>

        <div className= {styles.column}>
          <h2>Done</h2>
          <div>Ticket 7</div>
        </div>
      </div>
    </div>
  );
}

export default SprintBoard;