import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { FC } from "react";

interface Props {
  isOpen: any;
  onOpenChange: any;
}

const InstallGameModal: FC<Props> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal
      className="bg-[#101014]"
      isOpen={isOpen}
      backdrop="transparent"
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="uppercase text-sm flex flex-col gap-1 text-center">
              Choose Install Location
            </ModalHeader>
            <ModalBody>
              <div className="flex items-center gap-2">
                <Input
                  isReadOnly
                  type="text"
                  variant="bordered"
                  defaultValue="C:\Program Files\HightZone Games\gameFolder"
                  className="max-w-xs"
                />
                {/* Input file hidden */}
                <input className="hidden" type="file" id="filee" />
                {/* Label liên kết với input file */}
                <label htmlFor="filee">
                  <Button variant="bordered" className="text-white">
                    Change
                  </Button>
                </label>
              </div>

              <div>
                <span className="font-normal text-xs text-white/50">
                  Path: C:\Program Files\HightZone Games\gameFolder
                </span>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="text-white border-1 border-white/50"
                variant="light"
                onPress={onClose}
              >
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Install
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default InstallGameModal;
