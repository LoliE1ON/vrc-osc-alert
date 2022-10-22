export const alert: Alert = {
    status: false,
    region: "Київська область",
    setStatus(value: boolean): void {
        this.status = value;
    },
    setRegion(value: string): void {
        if (value.trim().length > 0) {
            this.region = value.trim();
        }
    },
};

type Alert = {
    readonly status: boolean;
    readonly region: string;
    setStatus: (value: boolean) => void;
    setRegion: (value: string) => void;
};
