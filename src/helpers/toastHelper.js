// import cx from 'classnames';
// import {
//   DARK_TOAST_OPTIONS,
//   LIGHT_TOAST_OPTIONS,
//   THEME_LIGHT,
// } from '../config/constant/projectConstant';
// import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
// import { getTheme } from './projectHelper';
// import { BsCheck } from 'react-icons/bs';
// import { BiError } from 'react-icons/bi';
// import { MdOutlineInfo } from 'react-icons/md';
// import { ToastErrorIcon } from '../components/icons/ToastErrorIcon';
// import { icons } from '../assets';
// import { getFailedReason } from './urlHelper';
// import styles from '../common/notifications/NotificationsPanel.module.scss';

// const { GreenTickIcon, RedCrossIcon } = icons;

// const commonProps = (msg, config) => {
//   // making the toast container larger if longer message
//   const tempConfig = {
//     ...config,
//     ...noIcon,
//   };

//   if (msg?.length > 35) {
//     tempConfig.className = 'toast-container largeToastify';
//   }
//   return tempConfig;
// };

// const noIcon = {
//   icon: false,
// };

// function messageArea(message, title, IconItem) {
//   const hasMessage = Boolean(message && title);
//   return (
//     <>
//       <div className="d-flex align-items-center">
//         {IconItem}
//         <h5
//           className={cx(
//             'toast-title fontSize85 align-self-center mb-0 float-left',
//             !hasMessage && 'toast-only-title'
//           )}>
//           {title || message}
//         </h5>
//       </div>
//       {title && <div className="toast-text">{message}</div>}
//     </>
//   );
// }

// export const successToast = (msg, title, customConfig) => {
//   if (typeof title === 'object') {
//     customConfig = title;
//     title = undefined;
//   }

//   const config = getTheme() === THEME_LIGHT ? LIGHT_TOAST_OPTIONS : DARK_TOAST_OPTIONS;
//   toast.success(
//     messageArea(msg, title, <BsCheck color="#1bb75e" size="1.5em" className="lf-toast-icon" />),
//     {
//       ...commonProps(msg, config),
//       ...customConfig,
//     }
//   );
// };

// export const errorToast = (msg, title, customConfig) => {
//   if (typeof title === 'object') {
//     customConfig = title;
//     title = undefined;
//   }
//   const config = getTheme() === THEME_LIGHT ? LIGHT_TOAST_OPTIONS : DARK_TOAST_OPTIONS;
//   toast.error(messageArea(msg, title, <ToastErrorIcon className="lf-toast-icon" />), {
//     ...commonProps(msg, config),
//     ...customConfig,
//   });
// };

// export const infoToast = (msg, title, customConfig) => {
//   if (typeof title === 'object') {
//     customConfig = title;
//     title = undefined;
//   }
//   const config = getTheme() === THEME_LIGHT ? LIGHT_TOAST_OPTIONS : DARK_TOAST_OPTIONS;
//   toast.info(
//     messageArea(
//       msg,
//       title,
//       <MdOutlineInfo color="#5795ff" size="1.5em" className="lf-toast-icon" />
//     ),
//     {
//       ...commonProps(msg, config),
//       ...customConfig,
//     }
//   );
// };

// export const warningToast = (msg, title, customConfig) => {
//   if (typeof title === 'object') {
//     customConfig = title;
//     title = undefined;
//   }
//   const config = getTheme() === THEME_LIGHT ? LIGHT_TOAST_OPTIONS : DARK_TOAST_OPTIONS;
//   toast.warning(
//     messageArea(msg, title, <BiError color="#da8622" size="1.5em" className="lf-toast-icon" />),
//     {
//       ...commonProps(msg, config),
//       ...customConfig,
//     }
//   );
// };

// function messageListArea(msgList, title, subtitle) {
//   const hasMessage = Boolean(msgList.length && title);
//   return (
//     <>
//       {title && <h3 className="toast-list-title">{title}</h3>}
//       {subtitle && <h5 className="toast-list-subtitle">{subtitle}</h5>}
//       <ul className="msgList">
//         {msgList?.map(({ id, name, status, reason, reasonData, action }) => {
//           return (
//             <>
//               <li key={id} className="d-flex flex-column align-items-start">
//                 <div className="d-flex align-items-start">
//                   {status ? <GreenTickIcon /> : <RedCrossIcon />}
//                   <div>
//                     <h5 className={cx('toast-title mb-0 ellipsis')}>{name}</h5>
//                     <span className={`toast-desc ellipsis ${status ? 'success' : 'error'}`}>
//                       {' '}
//                       - {(reason && getFailedReason(reason)) || action}
//                     </span>
//                   </div>
//                 </div>
//                 {
//                   reasonData
//                   &&
//                   <div className="d-flex flex-column reasonData"> 
//                     <h6><label>Following textures can not be deleted as they are used {reasonData?.automation_name_id ? 'in automations' : ''} {reasonData?.project_data?.[0] ? 'in project' : ''}:</label></h6>
//                     {reasonData?.texture_name && <h6><label>SKU ID:</label> {reasonData?.texture_name.split('/').pop()}</h6>}
//                     {reasonData?.automation_name_id && <h6><label>Automation Name/ID:</label> {reasonData?.automation_name_id}</h6>}
//                     {reasonData?.automation_template_name_id && <h6><label>Automation Template Name/ID:</label> {reasonData?.automation_template_name_id}</h6>}
//                     {reasonData?.project_data?.[0] && <h6><label>Project Name/ID:</label> {reasonData?.project_data?.[0]?.name}</h6>}
//                   </div>
//                 }
//               </li>
//             </>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// const stopAutoClose = { autoClose: 10000 };

// export const multiInfoToast = (msgList, title, subtitle = null, customConfig) => {
//   const config = getTheme() === THEME_LIGHT ? LIGHT_TOAST_OPTIONS : DARK_TOAST_OPTIONS;
//   toast.warning(messageListArea(msgList, title, subtitle), {
//     // ...commonProps(msgList, config),
//     ...customConfig,
//     ...stopAutoClose,
//   });
// };

// function notificationMessageArea(level, verb) {
//   return (
//     <>
//       <div className={cx(styles.notificationCard, styles.unread, styles.noBorder)}>
//         <h5>
//           {level === 'success' ? (
//             <GreenTickIcon />
//           ) : level === 'error' || level === 'failed' || level === 'disabled' ? (
//             <RedCrossIcon />
//           ) : (
//             ''
//           )}
//           {verb}
//         </h5>
//       </div>
//     </>
//   );
// }
// export const notificationInfoToast = (level, verb, customConfig, toastId) => {
//   const config = getTheme() === THEME_LIGHT ? LIGHT_TOAST_OPTIONS : DARK_TOAST_OPTIONS;

//   if (toast.isActive(toastId)) return;

//   toast.info(notificationMessageArea(level, verb), {
//     toastId: toastId,
//     ...customConfig,
//   });
// };

const renderMessageV2 = (line1, line2, actions, toastId) => {
  return (
    <>
      <div>
        {line1}
        {line2 && <div>{line2}</div>}
      </div>

      <div className="lf-toast-v2__actions">
        {actions.map((action, key) => {
          const handleClick = () => {
            action.onClick?.(toastId)

            const shouldClose = action.closeOnClick !== false
            if (shouldClose) {
              toast.dismiss(toastId)
            }
          }
          
          return <button type="button" key={key} onClick={handleClick}>{action.label}</button>
        })}
      </div>
    </>
  )
}

export const createV2Toast = (className) => (line1, line2OrConfig, config = {}) => {
  config = typeof line2OrConfig === 'object' ? line2OrConfig : config;
  const line2 = typeof line2OrConfig === 'object' ? null : line2OrConfig;

  const actions = config?.actions || [];
  delete config.actions

  toast(renderMessageV2(line1, line2, actions, config?.toastId), {
    bodyClassName: 'lf-toast-v2__body',
    className: `lf-toast-v2 ${className}`,
    ...config,
  });
};

export const successToastV2 = createV2Toast('lf-toast-v2--success')
export const errorToastV2 = createV2Toast('lf-toast-v2--error');
// export const infoToastV2 = infoToast;