export interface TableColumn {
    headerTitle: string;
    fieldKey: string;
    type: string;
    
    objectKey?: string;
    actions?: {
        isView?: boolean;
        isEdit?: boolean;
        isDelete?: boolean;
    }
    // format?: string;
    // defaultImage?: string;
    // isFrozen?: boolean;
    // frozenDirection?: string;

}
