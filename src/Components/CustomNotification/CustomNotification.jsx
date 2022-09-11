import CustomNotificationStyles from "./CustomNotificationStyles.module.scss";
const CustomNotification = () => {
  return (
    <div className={CustomNotificationStyles.container}>
      <strong>Duplicate Repo ... already exist in the list</strong>
    </div>
  );
};

export default CustomNotification;
