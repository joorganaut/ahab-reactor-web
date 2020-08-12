interface BaseState {
    IsLoading?: boolean;
    LoadingTitle?: string;
    UserID?: number;
    Redirect?: boolean;
    RedirectPath?: string;
    RedirectParams?: {};
    User?: {};
}
export default BaseState;