import CaseImage from "@/components/CaseImage";
import { CaseImageProps } from "@/components/CaseImage/CaseImage";
import { cn } from "@/utils/component-utils";

type _IphoneCaseImageProps = {};

export type IphoneCaseImageProps = _IphoneCaseImageProps &
	Omit<CaseImageProps, keyof _IphoneCaseImageProps>;

function IphoneCaseImage({ className, ...props }: IphoneCaseImageProps) {
	return <CaseImage className={cn("flex-1 p-6 2xl:px-60 2xl:py-40", className)} {...props} />;
}

export default IphoneCaseImage;
