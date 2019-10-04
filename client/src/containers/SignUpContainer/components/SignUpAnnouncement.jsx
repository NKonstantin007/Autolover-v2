import React from 'react';
import {Alert, Badge} from 'reactstrap';

import {
    SignUpAnnouncementWrapper, 
	AnnouncementList,
	AnnouncementTitle
} from './styles/SignUpAnnouncement';
const SignUpAnnouncement = () => {
    return (
        <SignUpAnnouncementWrapper>
            <AnnouncementTitle>Регистрация</AnnouncementTitle>
				<p>Зарегистрируйтесь на АвтоЛюбитель, используя форму справа. Это не займет много времнени. После регистрации не стесняйтесь приглащать друзей и знакомых посетить наш сайт. Им тоже понравится.</p>
				<Alert color="success">
					<b>Внимание!</b> При вводе логина и пароля допустимо использовать только символы латинского алфавита <Badge color="success">a-z</Badge> и цифры <Badge color="success">0-9</Badge>
				</Alert>

				<h5>Зачем регистрироваться?</h5>
				<p>После регистрации вы первыми увидите или узнаете о:</p>
					<AnnouncementList>
						<li>Самых актуальных автомобильных новостях</li>
						<li>Презентации различных моделей разных производителей</li>
						<li>Подробных характеристиках и особенностях новинок</li>
						<li>Устройстве основных узлов автомобиля и автомобииля в целом</li>
						<li>Правилах ремента и эксплуатации автомобиля</li>
						<li>Интересных истрических событиях в сфере автотранспорта</li>
					</AnnouncementList>
				<p>Кроме всего этого, у вас появиться возможность оставлять комментарии к статьям на нашем сайте и советоваться и узнавать мнения наших экспертов по любой интересующей вас проблеме</p>
        </SignUpAnnouncementWrapper>
    );
}

export default SignUpAnnouncement;