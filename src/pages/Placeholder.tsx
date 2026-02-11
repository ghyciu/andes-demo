import FloatingBottomBar from '../components/FloatingBottomBar/FloatingBottomBar';
import { FLOATING_BOTTOM_BAR_ITEMS } from '../components/FloatingBottomBar/FloatingBottomBar.types';
import FloatingTopBar from '../components/FloatingTopBar/FloatingTopBar';

const Placeholder: React.FC = () => {
  const WORK_IN_PROGRESS_GIF_FILEPATH = './assets/images/wip.gif';

  return (
    <div className="root-home">
      <FloatingTopBar />
      <div className="placeholder">
        <img src={WORK_IN_PROGRESS_GIF_FILEPATH} />
        <h1>You reached a work in progress page!</h1>
        <p>Please come back later.</p>
        <a href="/">Go back</a>
      </div>
      <FloatingBottomBar items={FLOATING_BOTTOM_BAR_ITEMS} />
    </div>
  );
};

export default Placeholder;
