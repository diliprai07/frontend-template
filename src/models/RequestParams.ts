import { ScoreCardStatus } from "./Order";
export interface Requestparams {
    size?: number;
    token?: string;
    page?: number;
}
export interface UserParams {
    email?: string;
    size?: number;
    token?: string;
    user_id?: string;
    user_timestamp?: string;
    page?: number;
}

export interface CompanyParams {
    org_id?: string;
}

export interface AssessmentParams {
    id?: string;
    category?: string;
}

export interface ConstructParams {
    
}


export interface ProductParams {
    name?: string;
    id?: string;
}

export interface ProductPictureParams {
    name?: string;
}

export interface OrderParams {
    score_card_status?: ScoreCardStatus;
    status?: ScoreCardStatus;

    page?: number;
    size?: number;

    lev_created_at?: string;
    lev_id?: string;
    lev_entity_id?: string;
    
    prev_page?: string;
}