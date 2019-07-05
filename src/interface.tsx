interface Original{
    url: string;
    width: string;
    height: string;
    size: string;
    frames: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
    hash?: string;
}

interface Images{
    original: Original;
    '480w_still': {
        url: string;
        width: string;
        height: string;
    };
}

export interface ImagesData {
    type: string;
    id: string;
    url: string;
    bitly_gif_url: string;
    bitly_url: string;
    username: string;
    rating: string;
    title: string;
    is_sticker: number;
    source: string;
    images: Images
}

export interface AppState {
    imagesData: ImagesData[];
    valueText: string;
}

interface State{
    saveData: ImagesData[];
}

interface Location{
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: State;
}

export interface SaveProps {
    history: object;
    match: object;
    location: Location;
}

export interface SaveState {
    saveImagesData: ImagesData[],
}

export interface GiphyListProps {
    imagesData: ImagesData[];
    isSimilar: boolean;
}

interface State{
    giphSource: string;
    giphTitle: string;
    giphUrl: string;
}

interface Location{
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: State;
}

export interface GiphyItemProps {
    history: object;
    match: object;
    location: Location;
}

export interface GiphyItemState {
    activeGiphy: ImagesData[];
}
