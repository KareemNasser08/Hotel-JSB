export interface TableColumn {
    headerTitle: string;
    fieldKey: string;
    type?: string;
    objectKey?: string;
    actions?: { key: string, icon: string }[];
    format?: string;

}


// export interface TableColumn {
//     headerTitle: string;
//     fieldKey: string;
//     type?: 'string' | 'boolean' | 'arrayOfString' | 'object' | 'arrayOfObject';
//     objectKey?: string;
//     actions?: { key: string, icon: string }[];
//   }
  
// format?: string;
// defaultImage?: string;
// isFrozen?: boolean;
// frozenDirection?: string;
