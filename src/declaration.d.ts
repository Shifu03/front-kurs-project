// @ts-ignore
window.Buffer = Buffer;

declare module "*.scss" {
	const css: { [key: string]: string };
	export default css;
}
declare module "*.sass" {
	const css: { [key: string]: string };
	export default css;
}
declare module "react-markup";
declare module "*.webp";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.mp4";
declare module "*.svg";
declare module "*.gif"; 