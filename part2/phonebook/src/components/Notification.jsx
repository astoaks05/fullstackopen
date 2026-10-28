const Notification = ({ message, showMessage }) => {
    if (message === null) {
        return null;
    }
    if (showMessage) {
        return (
        <div className = "notification" >
            {message}
        </div>
    )
    }
}

export default Notification;