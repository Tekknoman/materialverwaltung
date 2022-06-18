import { getAuth, updateEmail, updateProfile, User } from 'firebase/auth';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Account'
})
export default class Account extends Vue {
  private accountEditing = {
    displayName: '' as string | null,
    email: '' as string | null,
    photoURL: '' as string | null
  };

  public get user(): User {
    return this.$store.getters.user;
  }

  public randomAvatar(): boolean {
    const seed = this.user?.uid + (new Date().getTime() / 420 - 69);
    this.accountEditing.photoURL = 'https://avatars.dicebear.com/api/bottts/' + seed + '.svg';
    return false
  }

  public updateAccountDetails(): void {
    const session: User = getAuth().currentUser as User;

    updateProfile(session, {
      photoURL: this.accountEditing.photoURL,
      displayName: this.accountEditing.displayName
    });

    if (this.accountEditing.email !== this.user.email) {
      updateEmail(session, this.accountEditing.email!);
    }
  }

  public get emailEdited(): boolean {
    return this.accountEditing.email !== this.user.email;
  }

  public get displayNameEdited(): boolean {
    return this.accountEditing.displayName !== this.user.displayName;
  }

  public get avatarEdited(): boolean {
    return this.accountEditing.photoURL !== this.user.photoURL;
  }
 

  public resetAccountEditing(): void {
    const { displayName, email, photoURL } = this.user as User;
    this.accountEditing = {
      displayName,
      email,
      photoURL
    };
  }

  mounted(): void {
    this.resetAccountEditing();
  }
}
