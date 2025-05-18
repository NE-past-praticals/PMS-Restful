
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateSlot } from "@/hooks/useSlots";
import { SlotSize } from "@/api/slotApi";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlusCircle, Package } from "lucide-react";

const slotFormSchema = z.object({
  slotSize: z.enum(["SMALL", "MEDIUM", "LARGE"], {
    required_error: "Please select a slot size",
  }),
});

type SlotFormValues = z.infer<typeof slotFormSchema>;

interface CreateSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateSlotModal({ isOpen, onClose }: CreateSlotModalProps) {
  const createSlotMutation = useCreateSlot();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const form = useForm<SlotFormValues>({
    resolver: zodResolver(slotFormSchema),
    defaultValues: {
      slotSize: undefined,
    },
  });

  const onSubmit = async (data: SlotFormValues) => {
    try {
      await createSlotMutation.mutateAsync({
        slotSize: data.slotSize,
      });
      form.reset();
      onClose();
    } catch (error) {
      console.error("Failed to create slot:", error);
    }
  };

  const slotSizeDetails = {
    SMALL: { label: "Small", description: "For compact cars and motorcycles", icon: <Package className="h-5 w-5 text-blue-500" /> },
    MEDIUM: { label: "Medium", description: "For sedans and small SUVs", icon: <Package className="h-6 w-6 text-indigo-500" /> },
    LARGE: { label: "Large", description: "For large vehicles and vans", icon: <Package className="h-7 w-7 text-purple-500" /> },
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md overflow-hidden">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <DialogHeader>
            <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <PlusCircle className="h-8 w-8 text-blue-600" />
            </div>
            <DialogTitle className="text-xl text-center">Create Parking Slot</DialogTitle>
            <DialogDescription className="text-center">
              Add a new parking slot to the system
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
              <FormField
                control={form.control}
                name="slotSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Slot Size</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={createSlotMutation.isPending}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a slot size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="animate-fade-in">
                        {(["SMALL", "MEDIUM", "LARGE"] as SlotSize[]).map((size) => (
                          <SelectItem 
                            key={size} 
                            value={size}
                            className="hover-lift flex items-center h-12"
                          >
                            <div className="flex items-center">
                              {slotSizeDetails[size].icon}
                              <div className="ml-3">
                                <div className="font-medium">{slotSizeDetails[size].label}</div>
                                <div className="text-xs text-gray-500">{slotSizeDetails[size].description}</div>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select the appropriate size for the parking slot.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="gap-2 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={createSlotMutation.isPending}
                  className="w-full sm:w-auto hover-lift border-gray-300"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={createSlotMutation.isPending}
                  className="w-full sm:w-auto hover-lift"
                >
                  {createSlotMutation.isPending ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </span>
                  ) : (
                    "Create Slot"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
