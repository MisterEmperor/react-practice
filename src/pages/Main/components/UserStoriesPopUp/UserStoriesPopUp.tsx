import React, { useRef } from 'react';
import styles from './UserStoriesPopUp.module.scss';

interface UserStoriesPopUpProps {
  onClose: () => void;
  
}

function UserStoriesPopUp({ onClose }: UserStoriesPopUpProps) {
  const userStoriesPopUpRef = useRef<HTMLDivElement | null>(null);

  const closeUserStoriesPopUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (userStoriesPopUpRef.current && userStoriesPopUpRef.current === e.target) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const difficulty = formData.get('difficulty') as string;
    const issueType = formData.get('issueType') as string;
    const assignee = formData.get('assignee') as string;
    const estimation = parseFloat(formData.get('estimation') as string);

    if (title.trim() && description.trim() && !isNaN(estimation)) {
      //onSave(title, description, difficulty, issueType, assignee, estimation);
    }
  };

  return (
    <div
      className={styles.popupOverlay}
      ref={userStoriesPopUpRef}
      onClick={closeUserStoriesPopUp}
    >
      <div className={styles.popupContent}>
        <h3>Add New Ticket</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" placeholder="Ticket Title" required />
          </label>
          <label>
            Description:
            <textarea name="description" placeholder="Ticket Description" required />
          </label>
          <label>
            Difficulty:
            <select name="difficulty" required>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
          <label>
            Issue Type:
            <select name="issueType" required>
              <option value="Bug">Bug</option>
              <option value="Story">Story</option>
            </select>
          </label>
          <label>
            Assignee:
            <input type="text" name="assignee" placeholder="Assignee Name" required />
          </label>
          <label>
            Estimation (points):
            <input type="number" name="estimation" placeholder="Estimation" required />
          </label>
          <div className={styles.popupActions}>
            <button type="button" onClick={onClose}>
              Return to Sprint Board
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserStoriesPopUp;