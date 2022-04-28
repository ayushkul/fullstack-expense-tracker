/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */


export const httpConstants = {
    METHOD_TYPE: {
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',
    },
    CONTENT_TYPE: {
        APPLICATION_JSON: 'application/json',
        MULTIPART_FORM_DATA: 'multipart/form-data',
        APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
        IMAGE_PNG: 'image/png'
    },
    DEVICE_TYPE: {
        WEB: 'web'
    },
    API_HOST_URL: "http://localhost:3001",
    API_END_POINT: {

        //USER_END_POINTS
        LOGIN: '/login',
        UPDATE_USER: '/user',
        LOGOUT: '/logout',

        //CATEGORY_END_POINTS
        ADD_CATEGORY: '/category',
        UPDATE_CATEGORY: '/category',
        CATEGORY_LIST: '/category-list',

        //TRANSACTION_END_POINTS
        ADD_TRANSACTION: '/transaction',
        TRANSACTION_LIST: '/transaction-list',

    }
};

export const genericConstants = {
    APP_NAME: "Expense Tracker",

};

export const eventConstants = {

    SHOW_LOADER: "SHOW_LOADER",
    HIDE_LOADER: "HIDE_LOADER",

    GET_COMPANY_SUCCESS: "GET_COMPANY_SUCCESS",
    GET_COMPANY_FAILURE: "GET_COMPANY_FAILURE",

    UPDATE_COMPANY_SUCCESS: "UPDATE_COMPANY_SUCCESS",
    UPDATE_COMPANY_FAILURE: "UPDATE_COMPANY_FAILURE",

    SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
    GET_USER_DETAILS_SUCCESS: "GET_USER_DETAILS_SUCCESS",
    GET_USER_PERMISSION_SUCCESS: "GET_USER_PERMISSION_SUCCESS",

    REGISTER_DEVICE_SUCCESS: "REGISTER_DEVICE_SUCCESS",
    REGISTER_DEVICE_FAILURE: "REGISTER_DEVICE_FAILURE",

    ADD_RECORD_SUCCESS: "ADD_RECORD_SUCCESS",
    ADD_RECORD_FAILURE: "ADD_RECORD_FAILURE",

    GET_RECORD_LIST_REQUESTED: "GET_RECORD_LIST_REQUESTED",
    GET_RECORD_LIST_SUCCESS: "GET_RECORD_LIST_SUCCESS",
    GET_RECORD_LIST_FAILURE: "GET_RECORD_LIST_FAILURE",

    SET_SECTION: "SET_SECTION",
    SECTION_LIST: "SECTION_LIST",

    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',

    REVIEW_PUBLISH_REQUEST: 'REVIEW_PUBLISH_REQUEST'
};

export const actionTypeConstants = {

    ADD_SUB_LENDER: "ADD_SUB_LENDER",
    ADD_SUB_USER: "ADD_SUB_USER",
    ADD_ORIGINATION_COUNSEL: "ADD_ORIGINATION_COUNSEL",
    ADD_SELLER_COUNSEL: "ADD_SELLER_COUNSEL",
    ADD_SUB_USER_TEXT: "Add Sub-Users",
    ADD_ORIGINATION_COUNSEL_TEXT: "Add Origination Counsel",
    ADD_SELLER_COUNSEL_TEXT: "Add Seller Counsel",
};

export const apiSuccessConstants = {

    GET_RECORD_LIST: "Record List fetched successfully!",
    ACTIVATE_COMPANY: "Account Activated - User will be notified",
    DELETE_DOCUMENT: "Document has been deleted successfully ",
};


export const dashboardMenuImages = {
    HOME: {
        true: "/images/hospital-active.svg",
        false: "/images/hospital-inactive.svg",
    },
    ADVERTISERS: {
        true: "/images/advertisers-active.svg",
        false: "/images/advertisers-inactive.svg",
    },
    ANALYTICS: {
        true: "/images/reports-active.svg",
        false: "/images/reports-inactive.svg",
    },
    CATEGORIES: {
        true: "/images/content-active.svg",
        false: "/images/content-inactive.svg",
    },
    PRODUCTS: {
        true: "/images/products-active.svg",
        false: "/images/products-inactive.svg",
    },
    SETTINGS: {
        true: "/images/settings-active.svg",
        false: "/images/settings-inactive.svg",
    },
};

export const apiFailureConstants = {

    GET_FILTER_LIST: "Unable to fetch Filter List!",
    SEARCH_BY_CRITERIA: "Unable to apply Filter!!",
    GET_RECORD_LIST: "Unable to fetch Record List!",
    UPLOAD_PROPERTY_PHOTO: "Unable to upload property photo",
    UPLOAD_PHOTO: "Unable to upload photo!",
    UPLOAD_DOCUMENT: "Unable to upload document",
    UPLOAD_INVOICE: "Unable to upload invoice",
    VIEW_DOCUMENT: "Unable to View document",
    VIEW_INVOICE: "Unable to View invoice",
    GET_DOCUMENT: "Unable to get document",
    DELETE_DOCUMENT: "Unable to delete document",
    NO_DOCUMENT: "Document not found",
    PARAMETER_VIEW_DOCUMENT: "Invalid parameter to View Document",
    SELECT_REPORT_TYPE: "Please Select the Report Type",
    SELECT_RECORD: "Please Select a Record",
    SELECT_SINGLE_RECORD: "Please Select a Single Record",
    EXPORT_REPORT: "Unable to Export Report",
    LOGOUT: "Unable to Logout current User",
    ACTIVATE_COMPANY: "Unable to Activate Company Account",
    SUBSCRIPTION_DATA_NOT_FOUND: "Subscription Data not found",
    PUBLISH_REQUEST_DELETED: "Unable to delete the publish request!",
};


export const stringConstants = {
    DOWNLOAD_PRIVATE_KEY: "Download Private Key",
    ACTIVATION_PENDING_HEADER: "Activation Pending",
    SETUP_COMPANY_HEADER: "Setup your Company Profile",
    ACTIVATION_PENDING_DETAIL: "Your account will be activated once your wire transfer is confirmed by LIMB admin." +
        " You will be notified via your registered email.",
    SETUP_COMPANY_DETAIL: "Creating your company profile helps other counsels to search you and connect with you on LIMB plaform",
    CONTACT_ON_QUERY: "You can contact support@limbcre.com in case you have any questions.",
    SUPPORT_EMAIL: process.env.REACT_APP_SUPPORT_EMAIL || "support@limbcre.com",
    INVALID_EMAIL: "Invalid email address",
    EMPTY_CONTACT_EMAIL: "Contact email cannot be empty",
    EMPTY_PRIMARY_CONTACT: "Primary contact cannot be empty",
    EMPTY_COMPANY_WEBSITE: "Company website cannot be empty",
    EMPTY_COMPANY_LOGO: "Please upload company logo",
    EMPTY_FILE_NUMBER: "File Number cannot be empty",
    EMPTY_PROPERTY_PHOTO: "Please Upload the property Photo",
    EMPTY_INVOICE_NUMBER: "Please enter invoice number",
    EMPTY_INVOICE_AMOUNT: "Please enter invoice amount",
    EMPTY_DOCUMENT_CATEGORY: "Please Select the Category",
    EMPTY_DOCUMENT_CATEGORY_TYPE: "Please Select the Category Type",
    EMPTY_LOAN_TAG: "Loan Tag cannot be empty",
    EMPTY_PROPERTY_ADDRESS: "Property Address cannot be empty",
    EMPTY_PROPERTY_TYPE: "Property Type cannot be empty",
    EMPTY_CITY: "City cannot be empty",
    EMPTY_STATE: "State cannot be empty",
    EMPTY_COUNTRY: "Country cannot be empty",
    EMPTY_SUB_LENDER: "Sub Lender cannot be empty",
    EMPTY_OC: "Organisation Counsel cannot be empty",
    EMPTY_NAME: "Name cannot be empty",
    EMPTY_PASSWORD: "Password cannot be empty",
    EMPTY_EMAIL: "Email cannot be empty",
    EMPTY_LOCATION: "Location cannot be empty",
    EMPTY_ROLE_LEVEL: "Role Level cannot be empty",
    EMPTY_COMPANY_NAME: "Company Name cannot be empty",
    EMPTY_STREET_ADDRESS: "Street Address cannot be empty",
    EMPTY_SUITE: "Suite cannot be empty",
    EMPTY_SELLER_COUNSEL: "Seller Counsel cannot be empty",
    INVALID_NAME: "First letter should be capital",

    PASSWORD_VALIDATION: "Password should contain at least 1 capital letter, 1 special character and a minimum length of 8 characters",
    PASSWORD_DO_NOT_MATCH: "Passwords do not match",
    INVITATION_LINK_EXPIRED: "Invitation Link Expired!",
    LINK_EXPIRED: "Link Expired!",
    ACCOUNT_CREATED_SUCCESSFULLY: "Account created successfully",
    PASSWORD_RESET_SUCCESSFULLY: "Password changed successfully",
    PROFILE_PICTURE_UPDATED_SUCCESSFULLY: "Profile picture updated successfully!",
    PASSWORD_UPDATED_SUCCESSFULLY: "Password changed successfully!",
    INVITATION_PENDING: "Invitation Pending",
    REVIEW_PENDING: "Review Pending",
    ACTIVE: "Active",
    REJECTED: "Rejected",
    DELETED: "Deleted",
    INACTIVE: "Inactive",
    INCOMPLETE_SECTION: "Section is not completed yet! It is having some incomplete questions!",
    PLEASE_FILL_THIS_FIELD: "Please fill this field",
    INVITE_LENDER: "Invite New Lender",
    UPDATE_LENDER: "Update Lender",
    INVITE_OC: "Invite New Origination Counsel",
    INVITE_SC: "Invite New Loan Seller Counsel",
    EMPTY_FIELD: "This field cannot be empty",

    INVITE: "Invite",
    UPDATE: "Update",
    PUBLISH: 'Publish',
    REJECT: 'Reject',

    CONFIRM_DELETE_INVITATION: "Are you sure you want to delete this invitation?",
    CONFIRM_RESEND_INVITATION: "Are you sure you want to resend this invitation?",
    CONFIRM_LOGOUT: "Are you sure you want to log out of this account?",
    CONFIRM_DELETE_DOCUMENT: "Are you sure you want to delete this Document?",
    CONFIRM_ACTIVATE_ACCOUNT: "Are you sure you want to activate this account?",
    MARK_AS_COMPLETE: "Are you sure you want to mark this section as complete?",
    RESEND: "resend",
    DELETE: "delete",
    LOGOUT: "logout",
    DEFAULT: "default",

    DATE_RANGE_INPUT_ERROR: '\'From\' field cannot be later than \'To\' field.',
    DATE_INPUT_ERROR: 'Please enter valid values'
};


export const pathConstants = {
    LOGIN: '/',
    SIGN_UP: '/sign-up',
    COMPANY: '/company',
    DASHBOARD_MENU: {
        PUBLISH_REQUESTS: '/dashboard/publish-requests',
        ACTIVATION_REQUESTS: '/dashboard/activation-requests',
        SUBSCRIPTION_PLANS: '/dashboard/subscription-plans',
        INFORMATION_RECORDS: '/dashboard/information-records',
        INFORMATION_RECORDS_DETAILS: '/dashboard/information-records/',
        TRANSACTION_ACCELERATOR: '/dashboard/transaction-accelerator',
        ORIGINATION_COUNSEL: '/dashboard/origination-counsel',
        SELLER_COUNSEL: '/dashboard/seller-counsel',
        SUB_LENDERS: '/dashboard/sub-lender',
        BILLING: '/dashboard/billing',
        SETTINGS: '/dashboard/settings',
        LENDER: '/dashboard/lender',
        SUB_COUNSEL: '/dashboard/sub-counsel',
        NOTIFICATIONS: '/dashboard/notifications',
        PUBLISH: '/publish/',
        TRANSFER: '/transfer/',
        HISTORY: 'history/',
        ACTIVATION: '/activation',
    }
};

export const cookiesConstants = {
    DEVICE_ID: 'deviceId',
    SESSION_TOKEN: 'sessionToken',
    USER: 'user',
    USER_PERMISSION: 'userPermission',
    COMPANY: 'company',
    PUBLISH_REQUEST: 'publishRequest',
    SECTION_INFO: 'section-info',
    SECTION_LIST: 'section-list',
    IS_ADMIN_VIEW: 'admin-view',
};
