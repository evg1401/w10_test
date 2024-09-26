import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogFooter, DialogTrigger, DialogHeader, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from 'next/image'
import iconEdit from '@/assets/icons/edit.svg'

const AnalyticCardDialog = ({ title, onSave }: { title: string; onSave: (param: number) => void }) => {
    const [targetValue, setFormValue] = useState<number | undefined>(undefined);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    };

    const saveField = () => {
        if (targetValue) {
            onSave(targetValue)
            handleClose()
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)} variant="link">
                    <Image
                        src={iconEdit}
                        alt=""
                    />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Изменить цель {title}</DialogTitle>
                </DialogHeader>

                <Input type="number" value={targetValue} onChange={e => setFormValue(parseInt(e.target.value, 10))} />

                <DialogFooter>
                    <div className="w-full flex justify-between">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Отмена
                            </Button>
                        </DialogClose>

                        <Button type="submit" onClick={saveField}>Сохранить</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AnalyticCardDialog