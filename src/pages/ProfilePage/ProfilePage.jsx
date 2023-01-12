import './ProfilePage.scss';
import ProfileLists from "../../components/ProfileLists";
import ListDetails from "../../components/ListDetails";

export default function ProfilePage () {




    return(
        <section class="profile">
        <h4 class="profile__heading">Welcome back, BrainStation!</h4>
        <ProfileLists />
        <ListDetails />
        </section>
    )
}