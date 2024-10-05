//=================== Merque ===================//
export interface merquProps {
  id: number;
  attributes: {
    thumbnail: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
}

//=================== proyek ===================//
export interface proyekProps {
  id: number;
  attributes: {
    title: string;
    desc: string;
    author: string;
    createdAt: string;
    slug: string;
    tanggal: string;
    category: string;
    progres: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    type: string;
    types: string;
    avatar: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    content: Array<any>;
  };
}

export interface ProyekItemProps {
  proyek: proyekProps;
}

export interface ProyekFilterProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  uniqueCategories: string[];
}

export interface TypeFilterProps {
  selectedType: string;
  handleTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  uniqueTypes: string[];
}

export interface TypesFilterProps {
  selectedTypes: string;
  handleTypesChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  uniqueTypes: string[];
}

export interface proyekFeaturedProps {
  topItem: proyekProps;
}

export type ImageData = {
  id: number;
  attributes: {
    url: string | null;
    width: number;
    height: number;
  };
};

//=================== blog ===================//
export interface blogProps {
  id: number;
  attributes: {
    title: string;
    desc: string;
    author: string;
    createdAt: string;
    slug: string;
    tanggal: string;
    category: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    avatar: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    content: Array<any>;
  };
}

//=================== Portofolio ===================//
export interface portofolioProps {
  id: number;
  attributes: {
    title: string;
    hastag: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
}
