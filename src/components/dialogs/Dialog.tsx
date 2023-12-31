import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles/Dialog.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';

interface Props {
  title?: string;
  onClickClose?: () => void;
  children: React.ReactNode;
}

export const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ title, onClickClose, children }, ref) => {
    return (
      <dialog ref={ref} className={styles.dialog}>
        <div className={styles.dialogContainer}>
          {(title || onClickClose) && (
            <header id="dialog-header" className={styles.dialogHeader}>
              {!!title && <span>{title}</span>}
              {!!onClickClose && (
                <form method="dialog">
                  <button
                    id="dialog-close"
                    type="button"
                    onClick={onClickClose}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="fas fa-xmark fa-lg"
                    />
                  </button>
                </form>
              )}
            </header>
          )}
          <div id="dialog-content" className={styles.dialogContent}>
            {children}
          </div>
        </div>
      </dialog>
    );
  },
);

Dialog.displayName = 'Dialog';
