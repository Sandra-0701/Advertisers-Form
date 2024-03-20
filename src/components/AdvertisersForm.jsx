
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField ,Typography} from '@mui/material';
import './AdvertisersForm.css'; 

function AdvertisersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
   
  };

  return (
    <div className="form-container">
       <div className='head'>
       <Typography variant="h5" gutterBottom align="right">
        Release Order: 
        <TextField
          {...register('releaseOrder', { required: true })}
          fullWidth
          margin="normal"
          error={errors.releaseOrder ? true : false}
          helperText={errors.releaseOrder ? 'Release Order is required' : ''}
          className="form-field"
        />
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="right">
        Date: 
        <TextField
          {...register('date', { required: true })}
          type="date"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          error={errors.date ? true : false}
          helperText={errors.date ? 'Date is required' : ''}
          className="form-field"
        />
      </Typography>
       </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      

        <TextField
          {...register('client', { required: true })}
          label="Client"
          fullWidth
          margin="normal"
          error={errors.client ? true : false}
          helperText={errors.client ? 'Client is required' : ''}
          className="form-field"
        />

        <TextField
          {...register('contact', { required: true })}
          label="Contact"
          fullWidth
          margin="normal"
          error={errors.contact ? true : false}
          helperText={errors.contact ? 'Contact is required' : ''}
          className="form-field"
        />

        <TextField
          {...register('startDate', { required: true })}
          label="Start Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          error={errors.startDate ? true : false}
          helperText={errors.startDate ? 'Start Date is required' : ''}
          className="form-field"
        />

<TextField
        {...register('endDate', { required: true })}
        label="End Date"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        error={errors.endDate ? true : false}
        helperText={errors.endDate ? 'End Date is required' : ''}
      />

      <TextField
        {...register('position', { required: true })}
        label="Position"
        fullWidth
        margin="normal"
        error={errors.position ? true : false}
        helperText={errors.position ? 'Position is required' : ''}
      />

      <TextField
        {...register('rate', { required: true })}
        label="Rate"
        fullWidth
        margin="normal"
        error={errors.rate ? true : false}
        helperText={errors.rate ? 'Rate is required' : ''}
      />

      <TextField
        {...register('material', { required: true })}
        label="Material"
        fullWidth
        margin="normal"
        error={errors.material ? true : false}
        helperText={errors.material ? 'Material is required' : ''}
      />

      <TextField
        {...register('paymentMethod', { required: true })}
        label="Payment Method"
        fullWidth
        margin="normal"
        error={errors.paymentMethod ? true : false}
        helperText={errors.paymentMethod ? 'Payment Method is required' : ''}
      />

      <TextField
        {...register('specialInstruction')}
        label="Special Instruction"
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />

        <div className="button-container">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AdvertisersForm;
